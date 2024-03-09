import React, {
  SetStateAction,
  createContext,
  useContext,
  useState
} from "react";
import { ContextProps } from "./type";

// Create Context
const globalContext = createContext<ContextProps>({} as ContextProps);

export const ContextApi = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  const loginUser = (username: SetStateAction<null>) => {
    setUser(username);
  };

  const logoutUser = () => {
    setUser(null);
  };

  const loginAdmin = (admin: SetStateAction<null>) => {
    setAdmin(admin);
  };

  const logoutAdmin = () => {
    setAdmin(null);
  };

  return (
    <globalContext.Provider
      value={{
        user,
        setUser,
        admin,
        setAdmin,
        loginUser,
        logoutUser,
        loginAdmin,
        logoutAdmin
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

// Allow us to use the context created
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContex = () => {
  return useContext(globalContext);
};
