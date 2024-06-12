import { CSSProperties } from "react";
import LoginForm from "../../component/admin/loginForm/LoginForm";
import { Box } from "@mui/material";

// Set the page title
const pageTitle = () => (document.title = "Admin Login");
pageTitle();

const Login = () => {
  const handleBodyOverflow = () => {
    const rootBody = document.getElementById("root-body") as HTMLElement;

    rootBody.style.overflow = "hidden";
  };
  return (
    <Box style={loginContainer} onLoad={handleBodyOverflow}>
      <LoginForm />
    </Box>
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
  justifyContent: "center",
  alignItems: "center",
  overflow: "scroll"
};
