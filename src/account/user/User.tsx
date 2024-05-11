import { useLocation, useNavigate } from "react-router-dom";
import { useContexApi } from "../../utils/ContextApi";
import ColoredButton from "../../component/shared/button/coloredButton/ColoredButton";

const User = () => {
  const authUser = useContexApi();
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state?.path || "/";

  const handleLogout = () => {
    authUser.logoutUser();
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <h4>Hello, {authUser.user}</h4>
      <div>
        <ColoredButton text={"Sign out"} onClick={handleLogout} />
      </div>
    </div>
  );
};

export default User;
