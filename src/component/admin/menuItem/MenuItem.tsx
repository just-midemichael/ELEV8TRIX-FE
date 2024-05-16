import { IconButton, Typography } from "@mui/material";
import React, { CSSProperties, useState } from "react";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

interface MenuListItemProp {
  listIcon: React.ReactNode;
  menuText: string;
  link: string;
}

const MenuNavItem = ({ menuText, listIcon, link }: MenuListItemProp) => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <MenuItem
      active={selected === menuText}
      onClick={() => setSelected(menuText)}
      icon={<IconButton title={menuText}>{listIcon}</IconButton>}
      component={<Link to={link} style={menuListStyle} />}
    >
      <Typography style={textStyle}>{menuText}</Typography>
    </MenuItem>
  );
};

export default MenuNavItem;

const menuListStyle: CSSProperties = {
  height: "46px"
};

const textStyle: CSSProperties = {
  width: "100%",
  textAlign: "left",
  color: "white",
  display: "flex",
  fontSize: "0.85rem"
};
