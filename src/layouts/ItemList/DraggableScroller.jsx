import { useRef } from "react";
import { useDraggable } from "@/hooks/useDraggable";
import styles from "./DraggableItemList.module.css";

const DraggableScroller = ({ children }) => {
  const containerRef = useRef(null);
  const events = useDraggable(containerRef);

  return (
    <div ref={containerRef} className={styles.list} {...events}>
      {children}
    </div>
  );
};

export default DraggableScroller;
