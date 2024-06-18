import Item from "@/components/Item/Item";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ItemList;
