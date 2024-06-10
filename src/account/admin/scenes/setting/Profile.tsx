import { Box, useTheme } from "@mui/material";
import PageHeader from "../global/PageHeader";
import { tokens } from "../../themes/tokens";
import { CSSProperties } from "react";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import ProfileForm from "../../../../component/admin/profileForm/ProfileForm";
import ProfilePicture from "../../../../component/admin/profilePicture/ProfilePicture";

// Set the page title
const pageTitle = () => (document.title = "Profile");
pageTitle();

const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //CSS Styles Media Query hook
  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
    defaultValue: false
  });

  return (
    <Box
      style={isMobile ? pageContainerMobile : pageContainer}
      bgcolor={`${colors.primary[0]}`}
    >
      <PageHeader
        headerTitle={"Profile"}
        subHeaderTitle={"Update public profile"}
      />
      <Box style={isMobile ? detailContainerMobile : detailContainer}>
        {/*Photo Section*/}
        <ProfilePicture />

        {/*Input Section*/}
        <ProfileForm />
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

const detailContainer: CSSProperties = {
  width: "100%",
  maxWidth: "600px"
};

const detailContainerMobile: CSSProperties = {
  width: "100%",
  minWidth: "270px"
};
