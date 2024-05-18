import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { CSSProperties, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LogoColored from "../../../../component/logo/LogoColored";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { useContexApi } from "../../../../utils/ContextApi";
import adminImage from "/mentorImage2.png";
import MenuNavItem from "../../../../component/admin/menuItem/MenuItem";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
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
                  backgroundColor: active ? `#119ee3` : "transparent",
                  borderRadius: "0",
                  "&:hover": {
                    backgroundColor: active ? `#119ee3` : "transparent"
                  }
                };
            }
          }}
        >
          {/*Logo and Hamburger Menu */}
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
                  <LogoColored link={"/admin"} />
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

          {/*Admin Detail */}
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
                  fontWeight={700}
                  fontSize={"1.1rem"}
                  textAlign={"left"}
                  color={"white"}
                >
                  {authAdmin.admin}
                </Typography>
                <Typography
                  fontWeight={500}
                  fontSize={"0.8rem"}
                  textAlign={"left"}
                  color={"silver"}
                >
                  {role}
                </Typography>
              </Box>
            </Box>
          )}

          {/*MENU NAVIGATION */}
          <MenuNavItem
            listIcon={<HomeOutlinedIcon />}
            menuText={"Dashboard"}
            link={"/admin"}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            style={categoryStyle}
            textAlign={!isCollapsed ? "left" : "center"}
          >
            Course
          </Typography>
          <MenuNavItem
            listIcon={<BarChartOutlinedIcon />}
            menuText={"Create Course"}
            link={"/admin/create_course"}
            selected={selected}
            setSelected={setSelected}
          />
          <MenuNavItem
            listIcon={<HelpOutlineOutlinedIcon />}
            menuText={"Manage Course"}
            link={"/admin/course_management"}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            style={categoryStyle}
            textAlign={!isCollapsed ? "left" : "center"}
          >
            User
          </Typography>
          <MenuNavItem
            listIcon={<PersonOutlinedIcon />}
            menuText={"Create User"}
            link={"/admin/create_user"}
            selected={selected}
            setSelected={setSelected}
          />
          <MenuNavItem
            listIcon={<PeopleOutlinedIcon />}
            menuText={"Manage User"}
            link={"/admin/user_management"}
            selected={selected}
            setSelected={setSelected}
          />
          <MenuNavItem
            listIcon={<ReceiptOutlinedIcon />}
            menuText={"Payment History"}
            link={"/admin/payment_history"}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            style={categoryStyle}
            textAlign={!isCollapsed ? "left" : "center"}
          >
            Team
          </Typography>
          <MenuNavItem
            listIcon={<PersonOutlinedIcon />}
            menuText={"Team"}
            link={"/admin/team"}
            selected={selected}
            setSelected={setSelected}
          />
          <MenuNavItem
            listIcon={<PeopleOutlinedIcon />}
            menuText={"Manage Team"}
            link={"/admin/team_management"}
            selected={selected}
            setSelected={setSelected}
          />
          <MenuNavItem
            listIcon={<HelpOutlineOutlinedIcon />}
            menuText={"Authorization"}
            link={"/admin/authorization"}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            style={categoryStyle}
            textAlign={!isCollapsed ? "left" : "center"}
          >
            Setting
          </Typography>
          <MenuNavItem
            listIcon={<PersonOutlinedIcon />}
            menuText={"Profile"}
            link={"/admin/profile"}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;

const container: CSSProperties = {
  height: "100%",
  backgroundColor: "white",
  padding: "10px 5px",
  borderRight: "1px solid silver"
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
  padding: "5px 10px",
  margin: "0 0 20px 0",
  gap: "10px",
  cursor: "pointer",
  textTransform: "capitalize"
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
  width: "36px",
  height: "36px",
  backgroundColor: "sliver"
};

const categoryStyle: CSSProperties = {
  color: "black",
  margin: "5px 0 0 0",
  fontSize: "0.9rem",
  padding: "10px 20px 0 20px"
};
