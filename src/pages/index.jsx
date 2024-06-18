import Header from "@/components/layouts/Header/Header";
import ItemList from "@/components/layouts/ItemList/ItemList";

const Home = () => {
  const ItemData = [
    {
      id: 1,
      title: "아이템1",
      content: "아이템1 설명",
      price: 1000,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "아이템2",
      content: "아이템2 설명",
      price: 2000,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "아이템3",
      content: "아이템3 설명",
      price: 3000,
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    <>
      <Header title="홈" />
      <main>
        <h2>여기가 메인 홈</h2>
        <ItemList items={ItemData} />
      </main>
    </>
  );
};

export default Home;
