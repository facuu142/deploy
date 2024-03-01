import React from "react";
import { useHome } from "../hooks/useHome";
import { HomeContext } from "./HomeContext";
import { useUser } from "../hooks/useUser";
import usePost from "../hooks/usePost";

const HomeProvider = ({ children }) => {

  // this contains all functions of each hooks
  const homeHookData = useHome()
  const userHookData = useUser()
  const postHookData = usePost()


  const contextValue = {
    homeHookData,
    userHookData,
    postHookData
  }

  return (
    <HomeContext.Provider
      value={contextValue}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
