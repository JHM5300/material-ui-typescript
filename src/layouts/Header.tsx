import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerRefType } from "./DrawerMenu";
interface HeaderProps {
  drawerMenuRef: React.RefObject<DrawerRefType>
}

const Header = (props: HeaderProps) => {
  const { drawerMenuRef } = props;
  const openDrawerMenu = () => {
    if(drawerMenuRef.current?.toggleDrawerMenu){
      drawerMenuRef.current.toggleDrawerMenu(true);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={openDrawerMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
