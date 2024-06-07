import { Box, useTheme } from "@mui/material";
import PageHeader from "../global/PageHeader";
import { tokens } from "../../themes/tokens";

// Set the page title
const pageTitle = () => (document.title = "Team");
pageTitle();

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box height={"100%"} bgcolor={`${colors.primary[0]}`}>
      <PageHeader headerTitle={"Team"} subHeaderTitle={"View team members"} />
    </Box>
  );
};

export default Team;
