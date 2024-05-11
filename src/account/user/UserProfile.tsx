import { useLocation, useNavigate } from "react-router-dom";
import { useContexApi } from "../../utils/ContextApi";
import ColoredButton from "../../component/shared/button/coloredButton/ColoredButton";
import { CSSProperties } from "react";

const UserProfile = () => {
  const authUser = useContexApi();
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state?.path || "/";

  const handleLogout = () => {
    authUser.logoutUser();
    navigate(redirectPath, { replace: true });
  };

  return (
    <div style={containerStyle}>
      <h4>Hello, {authUser.user}</h4>
      <div>
        <ColoredButton text={"Sign out"} onClick={handleLogout} />
      </div>
    </div>
  );
};

export default UserProfile;

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "60dvh"
};
