import React, { createContext, useContext, useState } from "react";
import { ContextProps } from "./type";

// Create Context
const globalContext = createContext<ContextProps>({} as ContextProps);

export const ContextApi = ({ children }: { children: React.ReactNode }) => {
  //Set Course Link
  const [link, setLink] = useState("/courses");

  return (
    <globalContext.Provider value={{ link, setLink }}>
      {children}
    </globalContext.Provider>
  );
};

// Allow us to use the context created
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContex = () => {
  return useContext(globalContext);
};
