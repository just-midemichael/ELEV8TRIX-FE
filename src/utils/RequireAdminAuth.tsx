import { Navigate, useLocation } from "react-router-dom";
import { useContexApi } from "./ContextApi";

const RequireAdminAuth = ({ children }: { children: React.ReactNode }) => {
  const adminAuth = useContexApi();
  const location = useLocation();

  if (!adminAuth.admin || adminAuth.admin === null)
    return (
      <Navigate
        to={`${(window.location.href = "/admin_login")}`}
        state={{ path: location.pathname }}
      />
    );
  return <div>{children}</div>;
};

export default RequireAdminAuth;
