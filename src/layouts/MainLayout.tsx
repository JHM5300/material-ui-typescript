import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import DrawerMenu, { DrawerRefType } from "./DrawerMenu";
import Header from "./Header";

const MainLayout = () => {
  const drawerMenuRef = useRef<DrawerRefType>(null);

  return (
    <React.Fragment>
      <DrawerMenu anchor="left" ref={drawerMenuRef} />
      <Header drawerMenuRef={drawerMenuRef} />
      <Outlet />
    </React.Fragment>
  );
};

export default MainLayout;
