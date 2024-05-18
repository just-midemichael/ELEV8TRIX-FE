import { Outlet } from "react-router-dom";
import SideBar from "./scenes/global/SideBar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import { CSSProperties } from "react";

// Set the page title
const pageTitle = () => (document.title = "Admin Dashboard");
pageTitle();

const Admin = () => {
  return (
    <ThemeProvider theme={""}>
      <CssBaseline />
      <Box style={dashboardContainer}>
        <SideBar />
        <main style={mainContainer}>
          <TopBar />
          <Outlet />
        </main>
      </Box>
    </ThemeProvider>
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
  backgroundColor: "white"
};
