import { Box, IconButton, InputLabel, Typography } from "@mui/material";
import GlobalButton from "../../../shared/button/globalButton/GlobalButton";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Input from "../../../shared/inputForm/Input";
import { CSSProperties, useState } from "react";
import LogoColored from "../../../logo/LogoColored";
import { useContexApi } from "../../../../utils/ContextApi";
import { useLocation, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFieds = {
  email: "";
  password: "";
};

const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormFieds>();

  const [isVisible, setIsVisible] = useState("password");
  const [admin, setAdmin] = useState("");
  const authAdmin = useContexApi();
  const location = useLocation();
  const navigate = useNavigate();

  //Redirect to home page with this path ---> '/', only if path is not specified
  const redirectPath = location.state?.path || "/admin";
  //-------------------ENDS---------------------->

  // Login Method
  const handleLogin = () => {
    const password = document.getElementById("password") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    if (password.value === "" || password.value === null) return false;
    if (email.value === "" || password.value === null) return false;
    else {
      authAdmin.loginAdmin(admin);
      navigate(redirectPath);
    }
  };

  // Logout Method
  const handleLogout = () => {
    authAdmin.logoutAdmin(admin);
    navigate(redirectPath, { replace: true });
  };

  //Method handle visibility
  const handlePasswordVisibility = () => {
    if (isVisible === "password") return setIsVisible("text");
    else return setIsVisible("password");
  };

  //React-Hook-Form onSubmit Function
  const onSubmit: SubmitHandler<FormFieds> = (data) => {
    console.log(`formData: ${data}`);
  };
  return (
    <Box style={formContainer}>
      <form id="loginForm" onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <Box style={formLogoContainer}>
          <LogoColored link={"/admin"} />
          <Typography style={formLabelStyle}>Admin Login</Typography>
        </Box>
        <Box style={inputWrapper}>
          <Box>
            <InputLabel htmlFor="email" sx={{ textAlign: "left" }}>
              Email {}
            </InputLabel>
            <Box style={inputBox}>
              <Input
                {...register}
                id={"email"}
                className={""}
                type={"email"}
                placeholder={"Enter your email"}
                name={"email"}
                onChange={(e) => {
                  setAdmin(e.target.value);
                }}
              />
              <Box style={inputIconStyle}>
                <IconButton>
                  <EmailIcon sx={{ width: "22px", height: "22px" }} />
                </IconButton>
              </Box>
            </Box>
            <InputLabel htmlFor="password" sx={{ textAlign: "left" }}>
              Password
            </InputLabel>
            <Box style={inputBox}>
              <Input
                {...register("password")}
                id={"password"}
                className={""}
                type={`${isVisible}`}
                placeholder={"Enter your password"}
                name={"password"}
              />
              <Box style={inputIconStyle}>
                <IconButton onClick={handlePasswordVisibility}>
                  {isVisible === "password" ? (
                    <VisibilityOffIcon sx={{ width: "22px", height: "22px" }} />
                  ) : (
                    <VisibilityIcon sx={{ width: "22px", height: "22px" }} />
                  )}
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box textAlign={"left"} fontSize={"0.9rem"}>
          Forgot password?
        </Box>

        <Box>
          <GlobalButton
            type="submit"
            icon={undefined}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"4px"}
            gap={""}
            height={"45px"}
            minHeight={"40px"}
            width={"100%"}
            minWidth={"200px"}
            buttonColor={"#3149a1"}
            textColor={"white"}
            fontSize={"0.9rem"}
            fontWeight={0}
            cursor={"pointer"}
            borderRadius={"4px"}
            border={"none"}
            text={authAdmin?.user ? "Log out" : "Log in"}
            onClick={authAdmin?.user ? handleLogout : handleLogin}
          />
        </Box>
        <Box textAlign={"left"} fontSize={"0.9rem"} margin={"6px 0"}>
          Don't have an account? <span style={signupStyle}>Sign up</span>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;

const formContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minWidth: "250px",
  height: "100%",
  minHeight: "460px",
  position: "relative"
};

const formStyle: CSSProperties = {
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  width: "100%",
  maxWidth: "400px",
  height: "100%",
  maxHeight: "460px",
  padding: "20px 10px",
  gap: "10px"
};

const formLogoContainer: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 0"
};

const formLabelStyle: CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 100
};

const inputWrapper: CSSProperties = {
  padding: "6px 0"
};

const inputBox: CSSProperties = {
  width: "100%",
  display: "flex",
  border: "2px solid silver",
  margin: "8px 0",
  borderRadius: "2px",
  overflow: "hidden"
};

const inputIconStyle: CSSProperties = {
  padding: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50px",
  maxWidth: "50px"
};

const signupStyle: CSSProperties = {
  color: "#119ee3",
  cursor: "pointer",
  fontSize: "0.95rem"
};
