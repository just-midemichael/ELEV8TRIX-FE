import { Box, useTheme } from "@mui/material";
import PageHeader from "../global/PageHeader";
import { useContexApi } from "../../../../utils/ContextApi";
import { tokens } from "../../themes/tokens";

// Set the page title
const pageTitle = () => (document.title = "Admin Dashboard");
pageTitle();

const Dashboard = () => {
  const authAdmin = useContexApi();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Greet User with Date Object
  const greetTime = new Date().getHours();
  const greetAdmin =
    greetTime >= 12 && greetTime < 18
      ? "Good Afternoon"
      : greetTime >= 18 && greetTime < 24
        ? "Good Evening"
        : "Good Morning";

  return (
    <Box height={"100%"} bgcolor={`${colors.primary[400]}`}>
      <PageHeader
        headerTitle={"Dashboard"}
        subHeaderTitle={`${greetAdmin}, ${authAdmin.admin}`}
      />
    </Box>
  );
};

export default Dashboard;
