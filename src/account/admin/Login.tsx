import { CSSProperties, useState } from "react";
import ColoredButton from "../../component/shared/button/coloredButton/ColoredButton";
import { useContexApi } from "../../utils/ContextApi";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../component/shared/inputForm/Input";

// Set the page title
const pageTitle = () => (document.title = "Admin Login");
pageTitle();

const Login = () => {
  const [admin, setAdmin] = useState("");
  const authAdmin = useContexApi();
  const location = useLocation();
  const navigate = useNavigate();

  //Redirect to home page with this path ---> '/', only if path is not specified
  const redirectPath = location.state?.path || "/admin";
  //-------------------ENDS---------------------->

  // Login Method
  const handleLogin = () => {
    authAdmin.loginAdmin(admin);
    navigate(redirectPath);
  };

  // Logout Method
  const handleLogout = () => {
    authAdmin.logoutAdmin(admin);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div style={loginContainer}>
      <div>Welcome Admin, {authAdmin.admin}</div>
      <Input
        className={""}
        type={"text"}
        placeholder={"Enter your name"}
        name={"loginForm"}
        value={undefined}
        onChange={(e) => {
          setAdmin(e.target.value);
        }}
      />
      <div>
        <ColoredButton
          text={authAdmin?.user ? "Log out" : "Log in"}
          onClick={authAdmin?.user ? handleLogout : handleLogin}
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
