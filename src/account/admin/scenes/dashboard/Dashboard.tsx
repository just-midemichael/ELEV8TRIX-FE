import { Box } from "@mui/material";
import PageHeader from "../global/PageHeader";
import { useContexApi } from "../../../../utils/ContextApi";

const Dashboard = () => {
  const authAdmin = useContexApi();

  // Greet User with Date Object
  const greetTime = new Date().getHours();
  const greetAdmin =
    greetTime >= 12 && greetTime < 18
      ? "Good Afternoon"
      : greetTime >= 18 && greetTime < 24
        ? "Good Evening"
        : "Good Morning";

  return (
    <Box>
      <PageHeader
        headerTitle={"Dashboard"}
        subHeaderTitle={`${greetAdmin}, ${authAdmin.admin}`}
      />
    </Box>
  );
};

export default Dashboard;
