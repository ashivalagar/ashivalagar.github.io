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
  return (
    <NavWrapper active={onHover}>
      <PullOutMenu>
        <MenuIconWrapper
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <SubIconWrapper>
            <MenuIconLine active={onHover} position={"top"} />
            <MenuIconLine active={onHover} position={"middle"} />
            <MenuIconLine active={onHover} position={"bottom"} />
          </SubIconWrapper>

          <SubIconWrapper>
            <PullOutText>U</PullOutText>
            <PullOutText>N</PullOutText>
            <PullOutText>E</PullOutText>
            <PullOutText>M</PullOutText>
          </SubIconWrapper>
        </MenuIconWrapper>
      </PullOutMenu>
    </NavWrapper>
  );
};
