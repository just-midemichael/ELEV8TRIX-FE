import { Outlet } from "react-router-dom";
import SideBar from "./scenes/global/SideBar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import { CSSProperties } from "react";
import { ColorModeContext } from "./themes/colorModeContext";
import { useMode } from "./themes/theme";

// Set the page title
const pageTitle = () => (document.title = "Admin Dashboard");
pageTitle();

const Admin = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box style={dashboardContainer}>
          <SideBar />
          <Box style={mainContainer}>
            <TopBar />
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Admin;

const dashboardContainer: CSSProperties = {
  display: "flex",
  width: "100%",
  height: "100vh",
  position: "relative"
};

const mainContainer: CSSProperties = {
  height: "100%",
  width: "100%",
  position: "relative",
  overflowX: "hidden",
  backgroundColor: "whiteSmoke"
};
