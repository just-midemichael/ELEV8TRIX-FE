/* eslint-disable @typescript-eslint/no-explicit-any */
export type UserContextProps = {
  user: null;
  admin: null;
  setUser?: React.Dispatch<React.SetStateAction<null>>;
  setAdmin?: React.Dispatch<React.SetStateAction<null>>;
  loginUser: any;
  logoutUser: any;
  loginAdmin: any;
  logoutAdmin: any;
};

export type UserContextProviderProps = {
  children: React.ReactNode;
};
