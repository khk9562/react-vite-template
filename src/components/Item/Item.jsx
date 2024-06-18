import React, { useState } from "react";
import { Image, Card } from "react-bootstrap";

import styles from "./Item.module.css";

const Item = ({ data }) => {
  return (
    <Card className={styles.card}>
      <Card.Img src={data.image} alt={data.title} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTit}>{data.title}</Card.Title>
        <Card.Subtitle className={`ellipsis ${styles.cardDesc} `}>
          {data.content}
        </Card.Subtitle>
        <Card.Text className={styles.cardPrice}>{data.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
