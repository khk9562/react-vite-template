import React, { useState, useRef } from "react";
import Item from "@/components/Item/Item";
import styles from "./ItemList.module.css";
import DraggableScroller from "./DraggableScroller";

const ItemList = ({ items }) => {
  return (
    <DraggableScroller>
      {items.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </DraggableScroller>
  );
};

export default ItemList;
