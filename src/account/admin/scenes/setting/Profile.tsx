import { Box, InputLabel, useTheme } from "@mui/material";
import PageHeader from "../global/PageHeader";
import { tokens } from "../../themes/tokens";
import AdminAvatar from "../../../../component/admin/avatar/Avatar";
import { CSSProperties } from "react";
import GlobalButton from "../../../../component/shared/button/globalButton/GlobalButton";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import Input from "../../../../component/shared/inputForm/Input";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import useProfileForm from "../../../../hooks/useProfileForm";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

// Set the page title
const pageTitle = () => (document.title = "Profile");
pageTitle();

const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //CSS Styles Media Query hook
  const isMobile = useMediaQuery({
    query: "(max-width: 650px)",
    defaultValue: false
  });

  const {
    display,
    initialValue,
    handleChange,
    handleEdit,
    handleSave,
    handleFormSubmit
  } = useProfileForm();

  return (
    <Box
      style={isMobile ? pageContainerMobile : pageContainer}
      bgcolor={`${colors.primary[0]}`}
    >
      <PageHeader
        headerTitle={"Profile"}
        subHeaderTitle={"Update public profile"}
      />
      <Box width={"100%"} minWidth={"270px"}>
        {/*Photo Section*/}
        <Box style={isMobile ? photoContainerMobile : photoContainer}>
          <AdminAvatar style={profileAvatar} />
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
        {/*Input Section*/}
        <form name="adminDetail" onSubmit={handleFormSubmit}>
          <Box style={inputContianer}>
            <Box style={isMobile ? inputWrapperMobile : inputWrapper}>
              <Box width={"100%"} textAlign={"left"}>
                <InputLabel variant="standard">
                  Firstname
                  <Box
                    bgcolor={`${colors.primary[0]}`}
                    borderRadius={1}
                    border={`1px solid ${colors.grey[800]}`}
                    width={"100%"}
                    margin={"0 0 10px 0"}
                  >
                    <Input
                      className={""}
                      type={"text"}
                      placeholder={`Firstname`}
                      name={"adminFirstnameEditable"}
                      onChange={handleChange}
                      defaultValue={initialValue.firstname}
                      value={undefined}
                      required={true}
                    />
                  </Box>
                </InputLabel>
              </Box>
              <Box width={"100%"} textAlign={"left"}>
                <InputLabel variant="standard">
                  Lastname
                  <Box
                    bgcolor={`${colors.primary[0]}`}
                    borderRadius={1}
                    border={`1px solid ${colors.grey[800]}`}
                    width={"100%"}
                    margin={"0 0 10px 0"}
                  >
                    <Input
                      className={""}
                      type={"text"}
                      placeholder={`Lastname`}
                      name={"adminLastNameEditable"}
                      onChange={handleChange}
                      defaultValue={initialValue.lastname}
                      value={undefined}
                      required={true}
                    />
                  </Box>
                </InputLabel>
              </Box>
            </Box>
            <Box style={isMobile ? inputWrapperMobile : inputWrapper}>
              <Box width={"100%"} textAlign={"left"}>
                <InputLabel variant="standard">
                  Middlename
                  <Box
                    bgcolor={`${colors.primary[0]}`}
                    borderRadius={1}
                    border={`1px solid ${colors.grey[800]}`}
                    width={"100%"}
                    margin={"0 0 10px 0"}
                  >
                    <Input
                      className={""}
                      type={"text"}
                      placeholder={`Middlename`}
                      name={"adminMiddlenameEditable"}
                      onChange={handleChange}
                      defaultValue={initialValue.middlename}
                      value={undefined}
                    />
                  </Box>
                </InputLabel>
              </Box>
              <Box width={"100%"} textAlign={"left"}>
                <InputLabel variant="standard">
                  Phone Number
                  <Box
                    bgcolor={`${colors.primary[0]}`}
                    borderRadius={1}
                    border={`1px solid ${colors.grey[800]}`}
                    width={"100%"}
                    margin={"0 0 10px 0"}
                  >
                    <Input
                      className={""}
                      type={"tel"}
                      placeholder={`Phone Number`}
                      name={"phoneNumberEditable"}
                      onChange={handleChange}
                      defaultValue={initialValue.phoneNumber}
                      value={undefined}
                      required={true}
                      pattern="[0-9]{4}[0-9]{3}[0-9]{4}"
                    />
                  </Box>
                </InputLabel>
              </Box>
            </Box>
          </Box>
          <Box p={"10px"} display={"flex"} gap={2}>
            <GlobalButton
              icon={
                display === "flex" ? (
                  <CloseOutlinedIcon />
                ) : (
                  <EditOutlinedIcon />
                )
              }
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={"4px 6px"}
              gap={"1px"}
              height={"45px"}
              minHeight={"45px"}
              width={"fit-content"}
              minWidth={"100px"}
              buttonColor={`${colors.primary[400]}`}
              textColor={"inherit"}
              fontSize={"0.8rem"}
              fontWeight={500}
              cursor={"pointer"}
              borderRadius={"6px"}
              border={"none"}
              text={display === "flex" ? "Cancle" : "Edit"}
              onClick={handleEdit}
            />
            <GlobalButton
              icon={undefined}
              display={display}
              justifyContent={"center"}
              alignItems={"center"}
              padding={"4px 6px"}
              gap={"1px"}
              height={"45px"}
              minHeight={"45px"}
              width={"fit-content"}
              minWidth={"100px"}
              buttonColor={"#3149a1"}
              textColor={"white"}
              fontSize={"0.8rem"}
              fontWeight={500}
              cursor={"pointer"}
              borderRadius={"6px"}
              border={"none"}
              text={"Save"}
              onClick={handleSave}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Profile;

const pageContainer: CSSProperties = {
  height: "100%",
  overflowX: "scroll",
  overflowY: "scroll",
  padding: "10px 10px 100px 10px",
  width: "100%"
};

const pageContainerMobile: CSSProperties = {
  height: "100%",
  width: "100%",
  overflowX: "scroll",
  overflowY: "scroll",
  padding: "10px 10px 100px 10px",
  minWidth: "270px"
};

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
  maxWidth: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "20px",
  padding: "10px",
  overflow: "hidden"
};

const inputContianer: CSSProperties = {
  padding: "10px 10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "5px",
  width: "100%",
  maxWidth: "700px"
};

const inputWrapper: CSSProperties = {
  display: "flex",
  width: "100%",
  gap: "20px",
  maxWidth: "700px",
  overflow: "hidden"
};

const inputWrapperMobile: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  maxWidth: "600px",
  gap: "5px",
  overflow: "hidden"
};
