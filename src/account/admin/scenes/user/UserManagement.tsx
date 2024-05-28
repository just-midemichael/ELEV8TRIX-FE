import { Box, useTheme } from "@mui/material";
import PageHeader from "../global/PageHeader";
import { tokens } from "../../themes/tokens";

// Set the page title
const pageTitle = () => (document.title = "User Management");
pageTitle();

const UserManagement = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box height={"100%"} bgcolor={`${colors.primary[400]}`}>
      <PageHeader
        headerTitle={"User Management"}
        subHeaderTitle={"Manage all user"}
      />
    </Box>
  );
};

export default UserManagement;
