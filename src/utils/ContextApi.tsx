import { SetStateAction, createContext, useContext, useState } from "react";
import { UserContextProps, UserContextProviderProps } from "./type";

// Create Context
const globalContext = createContext<UserContextProps>({} as UserContextProps);

const ContextApi = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  const loginUser = (user: SetStateAction<null>) => {
    setUser(user);
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
        admin,
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
export const useContexApi = () => {
  return useContext(globalContext);
};

export default ContextApi;
