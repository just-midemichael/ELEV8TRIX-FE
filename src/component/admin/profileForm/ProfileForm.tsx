import { Box, InputLabel, Typography, useTheme } from "@mui/material";
import { CSSProperties } from "react";
import GlobalButton from "../../shared/button/globalButton/GlobalButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import useProfileForm from "../../../hooks/useProfileForm";
import { tokens } from "../../../account/admin/themes/tokens";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Input from "../../shared/inputForm/Input";

const ProfileForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //CSS Styles Media Query hook
  const isMobile = useMediaQuery({
    query: "(max-width: 650px)",
    defaultValue: false
  });

  const {
    isEditing,
    initialValue,
    handleChange,
    handleEdit,
    handleSave,
    handleFormSubmit
  } = useProfileForm();

  return (
    <form name="adminDetail" onSubmit={handleFormSubmit}>
      <Box style={inputContianer}>
        <Box style={isMobile ? inputWrapperMobile : inputWrapper}>
          <Box width={"100%"} textAlign={"left"}>
            <InputLabel variant="standard" sx={{ fontSize: "0.9rem" }}>
              Firstname
              <Box
                bgcolor={`${colors.primary[0]}`}
                borderRadius={1}
                border={`1px solid ${colors.grey[800]}`}
                style={inputComponentBox}
              >
                {isEditing ? (
                  <Input
                    className={""}
                    type={"text"}
                    placeholder={`Firstname`}
                    name={"adminFirstnameEditable"}
                    onChange={handleChange}
                    defaultValue={initialValue.firstname}
                    value={undefined}
                    required
                    autoFocus
                  />
                ) : (
                  <Typography style={staticDetail}>
                    {initialValue.firstname}
                  </Typography>
                )}
              </Box>
            </InputLabel>
          </Box>
          <Box width={"100%"} textAlign={"left"}>
            <InputLabel variant="standard" sx={{ fontSize: "0.9rem" }}>
              Lastname
              <Box
                bgcolor={`${colors.primary[0]}`}
                borderRadius={1}
                border={`1px solid ${colors.grey[800]}`}
                style={inputComponentBox}
              >
                {isEditing ? (
                  <Input
                    className={""}
                    type={"text"}
                    placeholder={`Lastname`}
                    name={"adminLastNameEditable"}
                    onChange={handleChange}
                    defaultValue={initialValue.lastname}
                    value={undefined}
                    required
                  />
                ) : (
                  <Typography style={staticDetail}>
                    {initialValue.lastname}
                  </Typography>
                )}
              </Box>
            </InputLabel>
          </Box>
        </Box>
        <Box style={isMobile ? inputWrapperMobile : inputWrapper}>
          <Box width={"100%"} textAlign={"left"}>
            <InputLabel variant="standard" sx={{ fontSize: "0.9rem" }}>
              Middlename
              <Box
                bgcolor={`${colors.primary[0]}`}
                borderRadius={1}
                border={`1px solid ${colors.grey[800]}`}
                style={inputComponentBox}
              >
                {isEditing ? (
                  <Input
                    className={""}
                    type={"text"}
                    placeholder={`Middlename`}
                    name={"adminMiddlenameEditable"}
                    onChange={handleChange}
                    defaultValue={initialValue.middlename}
                    value={undefined}
                  />
                ) : (
                  <Typography style={staticDetail}>
                    {initialValue.middlename}
                  </Typography>
                )}
              </Box>
            </InputLabel>
          </Box>
          <Box width={"100%"} textAlign={"left"}>
            <InputLabel variant="standard" sx={{ fontSize: "0.9rem" }}>
              Phone Number
              <Box
                bgcolor={`${colors.primary[0]}`}
                borderRadius={1}
                border={`1px solid ${colors.grey[800]}`}
                style={inputComponentBox}
              >
                {isEditing ? (
                  <Input
                    className={""}
                    type={"tel"}
                    placeholder={`Phone Number`}
                    name={"phoneNumberEditable"}
                    onChange={handleChange}
                    defaultValue={initialValue.phoneNumber}
                    value={undefined}
                    required
                    pattern={"[0-9]{4}[0-9]{3}[0-9]{4}"}
                  />
                ) : (
                  <Typography style={staticDetail}>
                    {initialValue.phoneNumber}
                  </Typography>
                )}
              </Box>
            </InputLabel>
          </Box>
        </Box>
        <Box style={isMobile ? inputWrapperMobile : inputWrapper}>
          <Box width={"100%"} textAlign={"left"}>
            <InputLabel variant="standard" sx={{ fontSize: "0.9rem" }}>
              Home Address
              <Box
                bgcolor={`${colors.primary[0]}`}
                borderRadius={1}
                border={`1px solid ${colors.grey[800]}`}
                style={inputComponentBox}
              >
                {isEditing ? (
                  <Input
                    className={""}
                    type={"text"}
                    placeholder={`Address`}
                    name={"adminMiddlenameEditable"}
                    onChange={handleChange}
                    defaultValue={initialValue.homeAddress}
                    value={undefined}
                  />
                ) : (
                  <Typography style={staticDetail}>
                    {initialValue.homeAddress}
                  </Typography>
                )}
              </Box>
            </InputLabel>
          </Box>
        </Box>
        <Box style={isMobile ? inputWrapperMobile : inputWrapper}>
          <Box width={"100%"} textAlign={"left"}>
            <InputLabel variant="standard" sx={{ fontSize: "0.9rem" }}>
              State
              <Box
                bgcolor={`${colors.primary[0]}`}
                borderRadius={1}
                border={`1px solid ${colors.grey[800]}`}
                style={inputComponentBox}
              >
                {isEditing ? (
                  <Input
                    className={""}
                    type={"text"}
                    placeholder={`State`}
                    name={"adminMiddlenameEditable"}
                    onChange={handleChange}
                    defaultValue={initialValue.homeState}
                    value={undefined}
                  />
                ) : (
                  <Typography style={staticDetail}>
                    {initialValue.homeState}
                  </Typography>
                )}
              </Box>
            </InputLabel>
          </Box>
          <Box width={"100%"} textAlign={"left"}>
            <InputLabel variant="standard" sx={{ fontSize: "0.9rem" }}>
              Country
              <Box
                bgcolor={`${colors.primary[0]}`}
                borderRadius={1}
                border={`1px solid ${colors.grey[800]}`}
                style={inputComponentBox}
              >
                {isEditing ? (
                  <Input
                    className={""}
                    type={"tel"}
                    placeholder={`Country`}
                    name={"phoneNumberEditable"}
                    onChange={handleChange}
                    defaultValue={initialValue.homeCountry}
                    value={undefined}
                    required
                    pattern={"[0-9]{4}[0-9]{3}[0-9]{4}"}
                  />
                ) : (
                  <Typography style={staticDetail}>
                    {initialValue.homeAddress}
                  </Typography>
                )}
              </Box>
            </InputLabel>
          </Box>
        </Box>
        <Box style={isMobile ? inputWrapperMobile : inputWrapper}>
          <Box width={"100%"} textAlign={"left"}>
            <InputLabel variant="standard" sx={{ fontSize: "0.9rem" }}>
              Bio
              {isEditing ? (
                <Box
                  bgcolor={`${colors.primary[0]}`}
                  borderRadius={1}
                  minHeight={"80px"}
                >
                  <textarea
                    style={{
                      backgroundColor: "transparent",
                      border: `1px solid ${colors.grey[800]}`,
                      width: "100%",
                      height: "100%",
                      minHeight: "80px",
                      outline: "none",
                      padding: "10px",
                      fontSize: "0.85rem",
                      color: `${colors.grey[300]}`
                    }}
                    defaultValue={initialValue.bio}
                  />
                </Box>
              ) : (
                <Box
                  bgcolor={`${colors.primary[0]}`}
                  borderRadius={1}
                  minHeight={"80px"}
                >
                  <textarea
                    style={{
                      backgroundColor: "transparent",
                      border: `1px solid ${colors.grey[800]}`,
                      width: "100%",
                      height: "100%",
                      minHeight: "80px",
                      outline: "none",
                      padding: "10px",
                      fontSize: "0.85rem",
                      color: `${colors.grey[300]}`
                    }}
                    value={initialValue.bio}
                  />
                </Box>
              )}
            </InputLabel>
          </Box>
        </Box>
      </Box>
      <Box p={"10px"} display={"flex"} gap={2}>
        <GlobalButton
          icon={isEditing ? <CloseOutlinedIcon /> : <EditOutlinedIcon />}
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
          text={isEditing ? "Cancle" : "Edit"}
          onClick={handleEdit}
        />
        {isEditing ? (
          <GlobalButton
            icon={undefined}
            display={""}
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
        ) : (
          ""
        )}
      </Box>
    </form>
  );
};

export default ProfileForm;

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
  maxWidth: "500px",
  gap: "5px",
  overflow: "hidden"
};

const inputComponentBox: CSSProperties = {
  width: "100%",
  height: "45px",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  margin: "0 0 10px 0"
};

const staticDetail: CSSProperties = {
  padding: "10px 20px",
  fontSize: "0.85rem",
  textTransform: "capitalize",
  fontWeight: 400,
  overflow: "hidden",
  height: "100%",
  maxWidth: "100",
  display: "flex",
  flexWrap: "wrap",
  boxSizing: "border-box"
};
