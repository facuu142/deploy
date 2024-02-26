import NavBar from "./feature/components/NavBar";
//import RegisterForm from "./feature/components/forms/RegisterForm"
import SideBar from "./feature/components/SideBar";
import SearchBar from "./feature/components/SearchBar";
import CardItem from "./feature/components/cards/CardItem";

function App() {
  return (
    <div className="w-full h-full flex flex-col">
      <NavBar />
      <SideBar />
      <SearchBar />

      <div className="w-full">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </div>
  );
}

export default App;
