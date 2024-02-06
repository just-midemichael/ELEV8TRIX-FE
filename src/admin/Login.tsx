import { CSSProperties } from "react";
import ColoredButton from "../component/shared/button/coloredButton/ColoredButton";

const Login = () => {
  const loginContainer: CSSProperties = {
    width: "100%",
    height: "100%",
    zIndex: 20,
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
  return (
    <div style={loginContainer}>
      Admin Login Page
      <ColoredButton text={"Login"} link={"/admin/dashboard"} target={""} />
    </div>
  );
};

export default Login;
