import { Box, useTheme } from "@mui/material";
import PageHeader from "../global/PageHeader";
import { tokens } from "../../themes/tokens";
import AdminAvatar from "../../../../component/admin/avatar/Avatar";
import { CSSProperties } from "react";
import ColoredButton from "../../../../component/shared/button/coloredButton/ColoredButton";
import GlobalButton from "../../../../component/shared/button/globalButton/GlobalButton";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

// Set the page title
const pageTitle = () => (document.title = "Profile");
pageTitle();

const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box height={"100%"} bgcolor={`${colors.primary[400]}`}>
      <PageHeader
        headerTitle={"Profile"}
        subHeaderTitle={"Update profile details"}
      />
      <Box style={detailContainer} bgcolor={`${colors.primary[0]}`}>
        <AdminAvatar style={profileAvatar} />
        <Box style={editButtonContianer}>
          <GlobalButton
            icon={<DeleteOutlined />}
            text={"Remove Phote"}
            className=""
            height={"45px"}
            minHeight={""}
            width={"fit-content"}
            minWidth={"130px"}
            buttonColor={"transparent"}
            textColor={`${colors.grey[100]}`}
            fontSize={"0.85rem"}
            fontWeight={600}
            cursor={"pointer"}
            borderRadius={""}
            border={"none"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"2px"}
            gap="2px"
          />
          <ColoredButton text={"Change Photo"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

const detailContainer: CSSProperties = {
  padding: "30px",
  margin: "0 10px",
  width: "100%",
  maxWidth: "800px",
  display: "flex",
  gap: "20px",
  overflow: "hidden"
};

const profileAvatar: CSSProperties = {
  cursor: "pointer",
  borderRadius: "100%",
  width: "160px",
  height: "160px",
  backgroundColor: "sliver"
};

const editButtonContianer: CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  gap: "20px",
  padding: "0 20px",
  overflow: "hidden"
};
