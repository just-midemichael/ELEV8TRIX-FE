/* eslint-disable @typescript-eslint/no-explicit-any */
export type ContextProps = {
  user: null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  admin: null;
  setAdmin: React.Dispatch<React.SetStateAction<null>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loginUser: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logoutUser: any;
  loginAdmin: any;
  logoutAdmin: any;
};
