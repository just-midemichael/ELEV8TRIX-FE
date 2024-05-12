import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { CSSProperties, useState } from "react";
import LogoColored from "../../../../component/logo/LogoColored";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useContexApi } from "../../../../utils/ContextApi";
import adminImage from "/mentorImage2.png";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const authAdmin = useContexApi();
  const role = "Super Admin";

  return (
    <Box style={container}>
      <Sidebar
        collapsed={isCollapsed}
        rootStyles={{
          borderRight: "0",
          position: "relative",
          height: "100%"
        }}
        backgroundColor={``}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level (Menu) element
              if (level === 0)
                return {
                  color: disabled ? "#f5d9ff" : "#d359ff",
                  backgroundColor: active ? `silver` : "transparent",
                  borderRadius: isCollapsed ? "0%" : "10px 0 0 10px",
                  "&:hover": {
                    backgroundColor: active ? `red` : "transparent"
                  }
                };
            }
          }}
        >
          <MenuItem style={menuContainer}>
            <Box style={menuWrapper}>
              {!isCollapsed && (
                <IconButton
                  href="/admin"
                  style={iconStyle}
                  sx={{
                    borderRadius: "0",
                    "&:hover": { backgroundColor: "transparent" }
                  }}
                >
                  <LogoColored link={"/"} />
                </IconButton>
              )}
              <IconButton
                onClick={() => setIsCollapsed(!isCollapsed)}
                style={iconStyle}
                sx={{
                  width: isCollapsed ? "100%" : "fit-content",
                  borderRadius: isCollapsed ? "0" : "100%"
                }}
              >
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          </MenuItem>

          {!isCollapsed && (
            <Box style={userDetailContainer}>
              <Box style={profileAvatarContainr}>
                {/* Admin Profile picture */}
                <img
                  src={`${adminImage}`}
                  alt={`${authAdmin.admin}`}
                  style={profileAvatar}
                />
              </Box>
              {/* Admin name and designation */}
              <Box textAlign="left">
                <Typography
                  fontWeight={900}
                  fontSize={"1rem"}
                  textAlign={"left"}
                >
                  {authAdmin.admin}
                </Typography>
                <Typography
                  fontWeight={500}
                  fontSize={"0.9rem"}
                  textAlign={"left"}
                  color={"silver"}
                >
                  {role}
                </Typography>
              </Box>
            </Box>
          )}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;

const container: CSSProperties = {
  height: "100%",
  backgroundColor: "grey",
  padding: "10px"
};

const menuContainer: CSSProperties = {
  width: "100%",
  height: "55px",
  padding: "0 10px"
};

const menuWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  width: "100%"
};

const iconStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px"
};

const userDetailContainer: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  margin: "10px",
  gap: "10px",
  cursor: "pointer"
};

const profileAvatarContainr: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px"
};

const profileAvatar: CSSProperties = {
  cursor: "pointer",
  borderRadius: "100%",
  width: "40px",
  height: "40px",
  backgroundColor: "sliver"
};
