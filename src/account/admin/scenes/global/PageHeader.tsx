import { Box } from "@mui/material";
import { H6 } from "../../../../component/shared/Title/H6";
import { CSSProperties } from "react";

interface PageHeaderProps {
  headerTitle: string;
  subHeaderTitle: string;
}

const PageHeader = ({ headerTitle, subHeaderTitle }: PageHeaderProps) => {
  return (
    <Box style={headerContainer}>
      <H6 title={`${headerTitle}`} style={{ fontWeight: 900 }} />
      <p style={{ color: "blue", fontSize: "1rem" }}>{subHeaderTitle}</p>
    </Box>
  );
};

export default PageHeader;

const headerContainer: CSSProperties = {
  padding: "15px 10px",
  textAlign: "left",
  backdropFilter: "blur(1px)"
};
