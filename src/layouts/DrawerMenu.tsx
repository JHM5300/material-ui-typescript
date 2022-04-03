import React, { forwardRef, useImperativeHandle, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import LabelIcon from "@mui/icons-material/Label";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useNavigate } from "react-router-dom";
type Anchor = "top" | "left" | "bottom" | "right";
type DrawerMenuProps = { anchor: Anchor };
export interface DrawerRefType {
  toggleDrawerMenu?: (isOpen: boolean) => void;
  anchor?: Anchor;
}

export const DrawerMenu = forwardRef((props: DrawerMenuProps, ref) => {
  const { anchor } = props;
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const navigate = useNavigate();

  useImperativeHandle(ref, () => ({
    toggleDrawerMenu(isOpen: boolean) {
      console.log(isOpen);
      setState({ ...state, [anchor]: isOpen });
    },
    anchor: anchor,
  }));

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      console.log(anchor);
      console.log(open);
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const menus = [
    { title: "main", icon: <HomeIcon /> },
    { title: "components", icon: <LabelIcon /> },
  ];
  const subMenus = [
    { title: "mail", icon: <MailIcon /> },
    { title: "profile", icon: <AccountBoxIcon /> },
  ];

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menus.map((text) => (
          <ListItem button key={text.title}>
            <ListItemIcon>
              {text.icon}
              <Divider />
            </ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {subMenus.map((text, index) => (
          <ListItem button key={text.title}>
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  );
});
export default DrawerMenu;
