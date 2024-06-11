import { Box, Typography, useTheme } from "@mui/material";
import { CSSProperties } from "react";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import GlobalButton from "../../shared/button/globalButton/GlobalButton";
import AdminAvatar from "../avatar/Avatar";
import { tokens } from "../../../account/admin/themes/tokens";
import useMediaQuery from "../../../hooks/useMediaQuery";
import useProfileForm from "../../../hooks/useProfileForm";

const ProfilePicture = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //CSS Styles Media Query hook
  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
    defaultValue: false
  });

  const { initialValue } = useProfileForm();

  return (
    <Box style={isMobile ? photoContainerMobile : photoContainer}>
      <AdminAvatar style={profileAvatar} />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"10px"}
        padding={"10px"}
      >
        <Box textAlign={isMobile ? "center" : "left"}>
          <Typography fontSize={"0.9rem"}>{initialValue.email}</Typography>
          <Typography fontSize={"0.8rem"}>
            {initialValue.phoneNumber}
          </Typography>
        </Box>
        <Box style={editButtonContianer}>
          {/* Remove Photo Button*/}
          <GlobalButton
            icon={<DeleteOutlined />}
            text={"Remove Phote"}
            className=""
            height={"45px"}
            minHeight={""}
            width={"fit-content"}
            minWidth={"100px"}
            buttonColor={`${colors.primary[400]}`}
            textColor={`${colors.grey[100]}`}
            fontSize={"0.85rem"}
            fontWeight={500}
            cursor={"pointer"}
            borderRadius={"6px"}
            border={"none"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"4px 6px"}
            gap="1px"
          />

          {/* Change Photo Button*/}
          <GlobalButton
            icon={<ChangeCircleOutlinedIcon />}
            text={"Change Phote"}
            className=""
            height={"45px"}
            minHeight={""}
            width={"fit-content"}
            minWidth={"100px"}
            buttonColor={"#3149a1"}
            textColor={"white"}
            fontSize={"0.8rem"}
            fontWeight={500}
            cursor={"pointer"}
            borderRadius={"5px"}
            border={"none"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"4px 6px"}
            gap="1px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePicture;

const photoContainer: CSSProperties = {
  padding: "30px",
  width: "100%",
  maxWidth: "700px",
  display: "flex",
  gap: "10px",
  overflow: "hidden"
};

const photoContainerMobile: CSSProperties = {
  padding: "10px",
  width: "100%",
  maxWidth: "700px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "10px",
  overflow: "hidden"
};

const profileAvatar: CSSProperties = {
  cursor: "pointer",
  borderRadius: "100%",
  width: "140px",
  height: "140px",
  backgroundColor: "sliver"
};

const editButtonContianer: CSSProperties = {
  width: "100%",
  minWidth: "260px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "20px",
  overflow: "hidden"
};
