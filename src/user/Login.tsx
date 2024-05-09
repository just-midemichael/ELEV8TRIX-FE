import { CSSProperties, useState } from "react";
import ColoredButton from "../component/shared/button/coloredButton/ColoredButton";
import { useGlobalContex } from "../utils/ContextApi";
import { useLocation, useNavigate } from "react-router-dom";

// Set the page title
const pageTitle = () => (document.title = "User Login");
pageTitle();

const Login = () => {
  const [username] = useState("Elev8trix");

  const auth = useGlobalContex();
  const location = useLocation();
  const navigate = useNavigate();

  //Redirect to home page for login with ---> '/', only if path is not specified
  const redirectPath = location.state?.path || "/";

  const handleLogin = (e: { preventDefault: () => void }) => {
    if (username != null) {
      auth?.loginUser(username);
      navigate(redirectPath);
    } else {
      auth?.logoutUser();
    }
    e.preventDefault();
  };

  return (
    <div style={loginContainer}>
      User Login Page
      <div>{JSON.stringify(auth.user)}</div>
      <div>
        <ColoredButton
          text={auth?.user ? "Log out" : "Log in"}
          link={auth?.user ? redirectPath : "/login"}
          onClick={auth?.user ? handleLogin : handleLogin}
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
