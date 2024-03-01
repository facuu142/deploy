import NavBar from "./feature/components/NavBar";
//import RegisterForm from "./feature/components/forms/RegisterForm"
import SideBar from "./feature/components/SideBar";
<<<<<<< HEAD
//import SearchBar from "./feature/components/SearchBar";
import { Route, Routes } from "react-router-dom";
import ChatFront from "./feature/components/chat/ChatFront";
import Home from "./feature/components/Home";
=======
import SearchBar from "./feature/components/SearchBar";
import CardItem from "./feature/components/cards/CardItem";
import usePost from "./hooks/usePost";
import { useEffect } from "react";
>>>>>>> 7984a62900f727f50a1c3eb091f82b5cde55405f

function App() {
  const { allPost = [], getAllPosts } = usePost();

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
<<<<<<< HEAD
  
      <main className="w-full h-full flex flex-col">
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatFront />} />
        </Routes>
      </main>
 
=======
    <div className="w-full h-full flex flex-col">
      <NavBar />
      <SideBar />
      <SearchBar />

      {/* HOME POST CONTENT */}
      <div className="w-full">
        {/* NOT POST FOUND */}
        {allPost.length === 0 && (
          <div className="w-full text-xl italic rounded-md mt-4 p-4 shadow-lg bg-yellow-200 text-orange-800">
            Ops! No hay publicaciones...
          </div>
        )}

        {/* POST FOUND */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          {allPost &&
            allPost.map((post) => {
              return <CardItem key={post.id} post={post} />;
            })}
        </div>
      </div>
    </div>
>>>>>>> 7984a62900f727f50a1c3eb091f82b5cde55405f
  );
}

export default App;
