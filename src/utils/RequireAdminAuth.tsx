import { Navigate, useLocation } from "react-router-dom";
import { useGlobalContex } from "./ContextApi";

const RequireAdminAuth = ({ children }: { children: React.ReactNode }) => {
  const adminAuth = useGlobalContex();
  const location = useLocation();
  if (!adminAuth.admin)
    return (
      <Navigate
        to={`${(window.location.href = "/")}`}
        state={{ path: location.pathname }}
      />
    );
  return <div>{children}</div>;
};

export default RequireAdminAuth;
