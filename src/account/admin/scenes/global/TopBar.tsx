import { Box, IconButton, InputBase } from "@mui/material";
import { CSSProperties, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const TopBar = () => {
  const [isDark] = useState(false);
  return (
    <Box style={container}>
      <Box style={searchBox}>
        <InputBase sx={{ m: 0.5, flex: 1 }} placeholder="search" />
        <IconButton type="button" style={iconStyle}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>

      <Box display={"flex"}>
        <IconButton title="Color Mode" style={iconStyle}>
          {isDark ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton title="Notification" style={iconStyle}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton title="Settings" style={iconStyle}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton title="User" style={iconStyle}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;

const container: CSSProperties = {
  height: "70px",
  padding: "5px",
  position: "sticky",
  top: 0,
  zIndex: 10,
  backgroundColor: "silver",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const searchBox: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "white",
  padding: "0 4px",
  margin: "0 2px 0 4px"
};

const iconStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px",
  width: "34px",
  height: "34px",
  minHeight: "34px",
  minWidth: "34px",
  margin: "0 4px"
};
