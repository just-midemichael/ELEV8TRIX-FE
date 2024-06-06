import { Menu, Sidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { CSSProperties, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LogoColored from "../../../../component/logo/LogoColored";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import PaddingOutlinedIcon from "@mui/icons-material/PaddingOutlined";
import { useContexApi } from "../../../../utils/ContextApi";
import MenuNavItem from "../../../../component/admin/menuItem/MenuItem";
import { tokens } from "../../themes/tokens";
import Logo from "../../../../component/logo/Logo";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AdminAvatar from "../../../../component/admin/avatar/Avatar";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const authAdmin = useContexApi();
  const role = "Super Admin";

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Sidebar
        collapsed={isCollapsed}
        rootStyles={{
          borderRight: "0",
          position: "relative",
          height: "100%"
        }}
        backgroundColor={`${colors.primary[0]}`}
      >
        <Menu
          style={{ paddingBottom: "100px" }}
          menuItemStyles={{
            button: ({ level, active }) => {
              // only apply styles on first level (Menu) element
              if (level === 0)
                return {
                  color: active ? `white` : `${colors.grey[100]}`,
                  backgroundColor: active ? `#3149a1` : "transparent",
                  borderRadius: 0,
                  "&:hover": {
                    backgroundColor: active
                      ? "#3149a1"
                      : `${colors.primary[400]}`
                  }
                };
            }
          }}
        >
          {/*Menu Container*/}
          <Box
            position={"sticky"}
            top={0}
            zIndex={30}
            bgcolor={`${colors.primary[0]}`}
            style={{ backdropFilter: "blur(5px)" }}
            paddingBottom={"20px"}
          >
            {/*Logo and Hamburger Menu */}
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
                  {theme.palette.mode === "dark" ? (
                    <Logo link={"/admin"} style={{ maxWidth: "100px" }} />
                  ) : (
                    <LogoColored
                      link={"/admin"}
                      style={{ maxWidth: "100px" }}
                    />
                  )}
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

            {/*Admin Detail */}
            {!isCollapsed && (
              <Box style={adminDetailContainer}>
                <Box style={profileAvatarContainr}>
                  {/* Admin Profile picture */}
                  <AdminAvatar style={profileAvatar} />
                </Box>

                {/* Admin name and designation */}
                <Box textAlign="left">
                  <Typography
                    fontWeight={700}
                    fontSize={"1.1rem"}
                    textAlign={"left"}
                    color={colors.grey[100]}
                  >
                    {authAdmin.admin}
                  </Typography>
                  <Typography
                    fontWeight={500}
                    fontSize={"0.8rem"}
                    textAlign={"left"}
                    color={`${colors.blueAccent[500]}`}
                  >
                    {role}
                  </Typography>
                </Box>
              </Box>
            )}
            {!isCollapsed && (
              <Box style={logoutStyle}>
                <IconButton
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                  onClick={() => authAdmin.logoutAdmin()}
                >
                  <ExitToAppOutlinedIcon
                    sx={{ width: "20px", height: "20px" }}
                  />
                </IconButton>
                <Typography
                  fontSize={"0.8rem"}
                  sx={{ cursor: "pointer" }}
                  onClick={() => authAdmin.logoutAdmin()}
                >
                  Log-out
                </Typography>
              </Box>
            )}
            {/*-------------------------*/}
            {/*Admin Avatar*/}
            {isCollapsed && (
              <MenuNavItem
                listIcon={<AdminAvatar style={profileAvatar} />}
                menuText={""}
                link={"/admin/profile"}
                selected={selected}
                setSelected={setSelected}
              />
            )}
          </Box>
          {/*-------------------------*/}

          {/*MENU NAVIGATION */}
          <Box style={{ overflowX: "hidden" }} zIndex={20}>
            <MenuNavItem
              listIcon={<HomeOutlinedIcon />}
              menuText={"Dashboard"}
              link={"/admin"}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              style={categoryStyle}
              color={colors.grey[300]}
              textAlign={!isCollapsed ? "left" : "center"}
            >
              Course
            </Typography>
            <MenuNavItem
              listIcon={<LibraryAddOutlinedIcon />}
              menuText={"Create Course"}
              link={"/admin/create_course"}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuNavItem
              listIcon={<PaddingOutlinedIcon />}
              menuText={"Manage Course"}
              link={"/admin/course_management"}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              style={categoryStyle}
              color={colors.grey[300]}
              textAlign={!isCollapsed ? "left" : "center"}
            >
              User
            </Typography>
            <MenuNavItem
              listIcon={<PersonAddAlt1OutlinedIcon />}
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
              listIcon={<PaymentsOutlinedIcon />}
              menuText={"Payment History"}
              link={"/admin/payment_history"}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              style={categoryStyle}
              color={colors.grey[300]}
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
              listIcon={<AdminPanelSettingsOutlinedIcon />}
              menuText={"Authorization"}
              link={"/admin/authorization"}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              style={categoryStyle}
              color={colors.grey[300]}
              textAlign={!isCollapsed ? "left" : "center"}
            >
              Setting
            </Typography>
            <MenuNavItem
              listIcon={<ManageAccountsOutlinedIcon />}
              menuText={"Profile"}
              link={"/admin/profile"}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
          {/*-------------------------*/}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;

const menuWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "70px",
  width: "100%",
  padding: "0 10px"
};

const iconStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px"
};

const adminDetailContainer: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "5px 10px",
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

const logoutStyle: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: "55px",
  height: "30px"
};

const categoryStyle: CSSProperties = {
  margin: "5px 0 0 0",
  fontSize: "0.9rem",
  padding: "10px 20px 0 20px"
};
