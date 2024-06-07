import { Badge, Box, IconButton, InputBase, useTheme } from "@mui/material";
import { CSSProperties, useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { ColorModeContext } from "../../themes/colorModeContext";
import { tokens } from "../../themes/tokens";

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      style={container}
      bgcolor={`${colors.primary[1]}`}
      borderBottom={`1px solid ${colors.grey[800]}`}
    >
      <Box
        style={searchBox}
        bgcolor={`${colors.primary[0]}`}
        border={`1px solid ${colors.grey[800]}`}
      >
        <InputBase
          sx={{ m: 0.5, flex: 1, color: `${colors.grey[100]}` }}
          placeholder="search"
        />
        <IconButton
          type="button"
          style={iconStyle}
          sx={{ color: `${colors.grey[400]}` }}
        >
          <SearchOutlinedIcon />
        </IconButton>
      </Box>

      <Box display={"flex"} p={"0 10px 0 0"}>
        <IconButton
          onClick={colorMode.toggleColorMode}
          title="Color Mode"
          style={iconStyle}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton title="Notification" style={iconStyle}>
          <Badge badgeContent={3} color="error">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton title="Settings" style={iconStyle}>
          <SettingsOutlinedIcon />
        </IconButton>
        {/* <IconButton title="User" style={iconStyle}>
          <PersonOutlinedIcon />
        </IconButton> */}
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
  zIndex: 50,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const searchBox: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
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
