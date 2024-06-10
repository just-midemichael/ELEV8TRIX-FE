import { Box, InputLabel } from "@mui/material";
import GlobalButton from "../../shared/button/globalButton/GlobalButton";

const LoginForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Box>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputLabel htmlFor="password">Password</InputLabel>
        <GlobalButton
          icon={undefined}
          display={""}
          justifyContent={""}
          alignItems={""}
          padding={""}
          gap={""}
          height={""}
          minHeight={""}
          width={""}
          minWidth={""}
          buttonColor={""}
          textColor={""}
          fontSize={""}
          fontWeight={0}
          cursor={""}
          borderRadius={""}
          border={""}
          text={undefined}
        />
      </Box>
      <Box></Box>
    </form>
  );
};

export default LoginForm;
