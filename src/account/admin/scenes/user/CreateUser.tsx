import { Box, useTheme } from "@mui/material";
import PageHeader from "../global/PageHeader";
import { tokens } from "../../themes/tokens";

// Set the page title
const pageTitle = () => (document.title = "Create User");
pageTitle();

const CreateUser = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box height={"100%"} bgcolor={`${colors.primary[400]}`}>
      <PageHeader headerTitle={"Create User"} subHeaderTitle={"Add new user"} />
    </Box>
  );
};

export default CreateUser;
