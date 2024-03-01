import CardItem from "./cards/CardItem";
import SearchBar from "./SearchBar";
const Home = () => {
  return (
    <>
      <div className="w-full">
      <SearchBar />
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </>
  );
};
export default Home;
