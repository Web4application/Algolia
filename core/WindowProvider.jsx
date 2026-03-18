import React, { createContext, useContext } from "react";
import useWindowManager from "./useWindowManager";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const wm = useWindowManager();
  return (
    <WindowContext.Provider value={wm}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindows = () => useContext(WindowContext);
