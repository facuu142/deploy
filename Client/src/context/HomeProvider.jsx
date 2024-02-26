import React from "react";
import { useHome } from "../hooks/useHome";
import { HomeContext } from "./HomeContext";
import { useUser } from "../hooks/useUser";

const HomeProvider = ({ children }) => {

  // this contains all functions of each hooks
  const homeHookData = useHome()
  const userHookData = useUser()


  const contextValue = {
    homeHookData,
    userHookData,
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
