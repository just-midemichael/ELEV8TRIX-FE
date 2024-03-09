import { useGlobalContex } from "./ContextApi";
import { Navigate, useLocation } from "react-router-dom";

const RequireUserAuth = ({ children }: { children: React.ReactNode }) => {
  const userAuth = useGlobalContex();
  const location = useLocation();

  if (!userAuth.user)
    return (
      <Navigate
        to={`${(window.location.href = "/login")}`}
        state={{ path: location.pathname }}
      />
    );
  return <div>{children}</div>;
};

export default RequireUserAuth;
