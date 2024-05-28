import { Box, useTheme } from "@mui/material";
import { H6 } from "../../../../component/shared/Title/H6";
import { CSSProperties } from "react";
import { tokens } from "../../themes/tokens";

interface PageHeaderProps {
  headerTitle: string;
  subHeaderTitle: string;
}

const PageHeader = ({ headerTitle, subHeaderTitle }: PageHeaderProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box style={headerContainer}>
      <H6
        title={`${headerTitle}`}
        style={{ fontWeight: 900, color: `${colors.blueAccent[500]}` }}
      />
      <p style={{ fontSize: "1rem" }}>{subHeaderTitle}</p>
    </Box>
  );
};

export default PageHeader;

const headerContainer: CSSProperties = {
  padding: "15px 10px",
  textAlign: "left",
  backdropFilter: "blur(1px)"
};
