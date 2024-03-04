import { useState } from "react";

const initialUserData = {
  id: 0,
  username: "",
  email: "",
  password: ""
}

export const useHome = () => {

  // const [user, dispatch] = useReducer(usersReducer, initialUserData);

  const [isModalOpen, setModalOpen] = useState(false)
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // FORMULARIO VISIBLE
  const handlerOpenSidebar = () => {
    setSidebarVisible(true);
  };

  const handlerCloseSideBar = () => {
    setSidebarVisible(false);
    setModalOpen(false)
  };

  const handlerModalOpen = () => {
    setModalOpen(true)
  }

  const handlerModalClose = () => {
    setModalOpen(false)
  }



  return {
    sidebarVisible,
    isModalOpen,
    handlerOpenSidebar,
    handlerCloseSideBar,
    handlerModalOpen,
    handlerModalClose,
  };
};
