import { CSSProperties, useState } from "react";
import ColoredButton from "../../component/shared/button/coloredButton/ColoredButton";
import { useContexApi } from "../../utils/ContextApi";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../component/shared/inputForm/Input";

// Set the page title
const pageTitle = () => (document.title = "User Login");
pageTitle();

const Login = () => {
  const [user, setUser] = useState("");
  const authUser = useContexApi();
  const location = useLocation();
  const navigate = useNavigate();

  //Redirect to home page with this path ---> '/', only if path is not specified
  const redirectPath = location.state?.path || "/";
  //-------------------ENDS---------------------->

  // Login Method
  const handleLogin = () => {
    authUser.loginUser(user);
    navigate(redirectPath);
  };

  // Logout Method
  const handleLogout = () => {
    authUser.logoutUser(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div style={loginContainer}>
      User Login Page
      <div>{authUser.user}</div>
      <Input
        className={""}
        type={"text"}
        placeholder={"Enter your name"}
        name={"loginForm"}
        value={undefined}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <div>
        <ColoredButton
          text={authUser?.user ? "Log out" : "Log in"}
          onClick={authUser?.user ? handleLogout : handleLogin}
        />
      </div>
    </div>
  );
};

export default Login;

const loginContainer: CSSProperties = {
  width: "100%",
  height: "100%",
  zIndex: 50,
  position: "fixed",
  bottom: "0",
  top: "0",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  gap: 20,
  justifyContent: "center",
  alignItems: "center"
};
