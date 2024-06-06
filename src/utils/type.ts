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

export interface adminProps {
  admin_id: number;
  email: string;
  password: string;
  firstname: string;
  middlename?: string;
  lastname: string;
  role: string;
  role_level: number;
  image: string;
  username: string;
  date_created: string;
  last_login: string;
}
