import React from "react";
import {
  NavWrapper,
  PullOutMenu,
  PullOutText,
  MenuIconWrapper,
  MenuIconLine,
  SubIconWrapper,
  Menu,
} from "./styles";

export const Navbar = (props) => {
  const setOnHover = (setVal) => {
    props.setOnHover(setVal);
  };
  const handleMouseDown = (e) => {
    props.handleMouseDown(e, "child");
  };

  return (
    <>
      <NavWrapper active={props.onHover} hide={props.navState}>
        {!props.navState ? (
          <PullOutMenu>
            <MenuIconWrapper
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
              onMouseDown={(e) => handleMouseDown(e)}
            >
              <PullOutText>MENU</PullOutText>
              <SubIconWrapper>
                <MenuIconLine active={props.onHover} position={"top"} />
                <MenuIconLine active={props.onHover} position={"middle"} />
                <MenuIconLine active={props.onHover} position={"bottom"} />
              </SubIconWrapper>
            </MenuIconWrapper>
          </PullOutMenu>
        ) : (
          <>
            <Menu></Menu>
          </>
        )}
      </NavWrapper>
    </>
  );
};
