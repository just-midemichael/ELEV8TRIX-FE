import { Box, InputLabel, useTheme } from "@mui/material";
import PageHeader from "../global/PageHeader";
import { tokens } from "../../themes/tokens";
import AdminAvatar from "../../../../component/admin/avatar/Avatar";
import { CSSProperties } from "react";
import GlobalButton from "../../../../component/shared/button/globalButton/GlobalButton";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import Input from "../../../../component/shared/inputForm/Input";
import { useContexApi } from "../../../../utils/ContextApi";

// Set the page title
const pageTitle = () => (document.title = "Profile");
pageTitle();

const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const authAdmin = useContexApi();

  return (
    <Box style={pageContainer} bgcolor={`${colors.primary[0]}`}>
      <PageHeader
        headerTitle={"Profile"}
        subHeaderTitle={"Update public profile"}
      />
      <Box minWidth={"500px"}>
        {/*Photo Section*/}
        <Box style={photoContainer}>
          <AdminAvatar style={profileAvatar} />
          <Box style={editButtonContianer}>
            <GlobalButton
              icon={<DeleteOutlined />}
              text={"Remove Phote"}
              className=""
              height={"45px"}
              minHeight={""}
              width={"fit-content"}
              minWidth={"100px"}
              buttonColor={"transparent"}
              textColor={`${colors.grey[100]}`}
              fontSize={"0.85rem"}
              fontWeight={500}
              cursor={"pointer"}
              borderRadius={""}
              border={"none"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={"2px"}
              gap="2px"
            />

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
              padding={"4px 10px"}
              gap="2px"
            />
          </Box>
        </Box>

        {/*Input Section*/}
        <Box style={inputContianer}>
          <Box display={"flex"} width={"100%"} gap={3} maxWidth={"700px"}>
            <Box width={"100%"} textAlign={"left"}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Firstname
              </InputLabel>
              <Box
                bgcolor={`${colors.primary[0]}`}
                borderRadius={1}
                border={`1px solid ${colors.grey[800]}`}
                width={"100%"}
                minWidth={"260px"}
                margin={"0 0 10px 0"}
              >
                <Input
                  className={""}
                  type={"text"}
                  placeholder={`${authAdmin.admin}`}
                  name={"adminFirstname"}
                  value={`${authAdmin.admin}`}
                />
              </Box>
            </Box>
            <Box width={"100%"} textAlign={"left"}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Lastname
              </InputLabel>
              <Box
                bgcolor={`${colors.primary[0]}`}
                borderRadius={1}
                border={`1px solid ${colors.grey[800]}`}
                width={"100%"}
                minWidth={"260px"}
                margin={"0 0 10px 0"}
              >
                <Input
                  className={""}
                  type={"text"}
                  placeholder={`${authAdmin.admin}`}
                  name={"adminLastName"}
                  value={`${authAdmin.admin}`}
                />
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} width={"100%"} gap={3} maxWidth={"700px"}>
            <Box width={"100%"} textAlign={"left"}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Middlename
              </InputLabel>
              <Box
                bgcolor={`${colors.primary[0]}`}
                borderRadius={1}
                border={`1px solid ${colors.grey[800]}`}
                width={"100%"}
                minWidth={"260px"}
                margin={"0 0 10px 0"}
              >
                <Input
                  className={""}
                  type={"text"}
                  placeholder={`${authAdmin.admin}`}
                  name={"adminMiddlename"}
                  value={`${authAdmin.admin}`}
                />
              </Box>
            </Box>
            <Box width={"100%"} textAlign={"left"}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Phone Number
              </InputLabel>
              <Box
                bgcolor={`${colors.primary[0]}`}
                borderRadius={1}
                border={`1px solid ${colors.grey[800]}`}
                width={"100%"}
                minWidth={"260px"}
                margin={"0 0 10px 0"}
              >
                <Input
                  className={""}
                  type={"text"}
                  placeholder={`${authAdmin.admin}`}
                  name={"phoneNumber"}
                  value={`${authAdmin.admin}`}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

const pageContainer: CSSProperties = {
  height: "100%",
  overflowX: "scroll",
  overflowY: "scroll",
  padding: "10px 10px 100px 10px"
};

const photoContainer: CSSProperties = {
  padding: "30px",
  width: "fit-content",
  maxWidth: "800px",
  display: "flex",
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
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  gap: "20px",
  padding: "0 20px",
  overflow: "hidden"
};

const inputContianer: CSSProperties = {
  padding: "30px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1px",
  width: "100%"
};
