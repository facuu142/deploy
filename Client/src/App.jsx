import NavBar from "./feature/components/NavBar";
//import RegisterForm from "./feature/components/forms/RegisterForm"
import SideBar from "./feature/components/SideBar";
//import SearchBar from "./feature/components/SearchBar";
import { Route, Routes } from "react-router-dom";
import ChatFront from "./feature/components/chat/ChatFront";
import Home from "./feature/components/Home";

function App() {
  return (
  
      <main className="w-full h-full flex flex-col">
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatFront />} />
        </Routes>
      </main>
 
  );
}

export default App;
