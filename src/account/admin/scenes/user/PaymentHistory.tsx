import { Box, useTheme } from "@mui/material";
import PageHeader from "../global/PageHeader";
import { tokens } from "../../themes/tokens";

// Set the page title
const pageTitle = () => (document.title = "Payment History");
pageTitle();

const PaymentHistory = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box height={"100%"} bgcolor={`${colors.primary[400]}`}>
      <PageHeader
        headerTitle={"Payment"}
        subHeaderTitle={"View user payment"}
      />
    </Box>
  );
};

export default PaymentHistory;
