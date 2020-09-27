import React, { useState } from "react";
import {
  NavWrapper,
  PullOutMenu,
  PullOutText,
  MenuIconWrapper,
  MenuIconLine,
  SubIconWrapper,
} from "./styles";

export const Navbar = () => {
  const [onHover, setOnHover] = useState(false);
  const [navState, setNavState] = useState(false);
  return (
    <NavWrapper active={onHover} expand={navState}>
      <PullOutMenu>
        <MenuIconWrapper
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          onClick={() => setNavState(true)}
          expand={navState}
        >
          <PullOutText>MENU</PullOutText>
          <SubIconWrapper>
            <MenuIconLine active={onHover} position={"top"} />
            <MenuIconLine active={onHover} position={"middle"} />
            <MenuIconLine active={onHover} position={"bottom"} />
          </SubIconWrapper>
        </MenuIconWrapper>
      </PullOutMenu>
    </NavWrapper>
  );
};
