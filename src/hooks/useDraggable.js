import { useState, useCallback, MouseEvent, RefObject } from "react";

const throttle = (func, delay) => {
  let timer;
  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      func();
    }, delay);
  }
};

export const useDraggable = (scrollerRef) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [totalX, setTotalX] = useState(0);

  const preventUnexpectedEffects = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onDragStart = (e) => {
    preventUnexpectedEffects(e);
    setIsDragging(true);
    const x = e.clientX;
    setStartX(x);
    if (scrollerRef.current && "scrollLeft" in scrollerRef.current) {
      setTotalX(x + scrollerRef.current.scrollLeft);
    }
  };

  const onDragEnd = (e) => {
    if (!isDragging) return;
    if (!scrollerRef.current) return;

    setIsDragging(false);

    const endX = e.clientX;
    const childNodes = [...(scrollerRef.current?.childNodes || [])];
    const dragDiff = Math.abs(startX - endX);

    if (dragDiff > 10) {
      childNodes.forEach((child) => {
        child.addEventListener("click", preventUnexpectedEffects);
      });
    } else {
      childNodes.forEach((child) => {
        child.removeEventListener("click", preventUnexpectedEffects);
      });
    }
  };

  const onDragMove = (e) => {
    if (!isDragging) return;
    throttle(function () {
      // 클릭 등 마우스 이동 외 다른 이벤트 실행되는 것 방지
      preventUnexpectedEffects(e);

      // 스크롤 포지션
      const scrollLeft = totalX - e.clientX;

      if (scrollerRef.current && "scrollLeft" in scrollerRef.current) {
        // 스크롤 발생
        scrollerRef.current.scrollLeft = scrollLeft;
      }
    }, 100);
  };

  return {
    onMouseDown: onDragStart,
    onMouseMove: onDragMove,
    onMouseUp: onDragEnd,
    onMouseLeave: onDragEnd,
  };
};
