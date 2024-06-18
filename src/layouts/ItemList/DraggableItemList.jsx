import React, { useState, useRef } from "react";
import Item from "@/components/Item/Item";
import DraggableScroller from "./DraggableScroller";

const DraggableItemList = ({ items }) => {
  return (
    <DraggableScroller>
      {items.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </DraggableScroller>
  );
};

export default DraggableItemList;
