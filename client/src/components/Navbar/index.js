import React from "react";
import { NavWrapper, PullOutMenu, PullOutText } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";

export const Navbar = () => {
  return (
    <NavWrapper>
      <PullOutMenu>
        <MenuIcon />
        <PullOutText>MENU</PullOutText>
      </PullOutMenu>
    </NavWrapper>
  );
};
