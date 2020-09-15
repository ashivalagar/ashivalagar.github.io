import React from "react";
import {
  NavWrapper,
  PullOutMenu,
  PullOutText,
  MenuIconWrapper,
} from "./styles";
import MenuIcon from "@material-ui/icons/Menu";

export const Navbar = () => {
  return (
    <NavWrapper>
      <PullOutMenu>
        <MenuIconWrapper>
          <MenuIcon />
          <PullOutText>MENU</PullOutText>

          {/* <a class="navbar-toggle" href="#">
            <i class="icon">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </i>
            <span class="txt">
              <span>M</span>
              <span>e</span>
              <span>n</span>
              <span>u</span>
            </span>
          </a> */}
        </MenuIconWrapper>
      </PullOutMenu>
    </NavWrapper>
  );
};
