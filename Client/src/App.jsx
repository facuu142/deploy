import NavBar from "./feature/components/NavBar";
//import RegisterForm from "./feature/components/forms/RegisterForm"
import SideBar from "./feature/components/SideBar";
//import SearchBar from "./feature/components/SearchBar";
import Modal from "./feature/components/Modal";
import Home from "./pages/Home";

function App() {


  return (
  
      <main className="w-full h-full flex flex-col">
        <NavBar />
        <SideBar />
        <Modal />
        <Home />
        {/* <ChatFront /> */}
      </main>
 
  );
}

export default App;
