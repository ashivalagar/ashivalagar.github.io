import React from "react";
import {
  NavWrapper,
  PullOutMenu,
  PullOutText,
  MenuIconWrapper,
  MenuIconLine,
  SubIconWrapper,
  Menu,
  MenuContainer,
  BackIcon,
  NavLink,
} from "./styles";
import { useHistory } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

export const Navbar = (props) => {
  const history = useHistory();
  const handleRedirect = (e, path) => {
    props.handleMouseDown(e, "parent");
    history.push(path);
  };
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
              onClick={(e) => handleMouseDown(e)}
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
            <Menu>
              <BackIcon>
                <CloseIcon onMouseDown={(e) => handleMouseDown(e)} />
              </BackIcon>
              <MenuContainer>
                <NavLink
                  onClick={(e) => {
                    handleRedirect(e, "/");
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={(e) => {
                    handleRedirect(e, "/projects");
                  }}
                >
                  Projects
                </NavLink>
                <NavLink
                  onClick={(e) => {
                    handleRedirect(e, "/contact");
                  }}
                >
                  Contact Me!
                </NavLink>
                <NavLink
                  onClick={(e) => {
                    handleRedirect(e, "/blog");
                  }}
                >
                  Blog
                </NavLink>
                <NavLink
                  onClick={(e) => {
                    handleRedirect(e, "/resume");
                  }}
                >
                  Resume
                </NavLink>
              </MenuContainer>
            </Menu>
          </>
        )}
      </NavWrapper>
    </>
  );
};
