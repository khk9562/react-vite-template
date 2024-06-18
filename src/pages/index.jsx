import Header from "@/layouts/Header/Header";
import DraggableItemList from "@/layouts/ItemList/DraggableItemList";
import { ITEM_DATA } from "@/utils/test";
import DraggableScroller from "@/layouts/ItemList/DraggableScroller";

const Home = () => {
  return (
    <>
      <Header title="홈" />
      <main>
        <h2>여기가 메인 홈</h2>
        <DraggableItemList items={ITEM_DATA} />
      </main>
    </>
  );
};

export default Home;
