import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  height: 100%;
  ${(props) => {
    if (!props.hide) {
      return `width: ${props.active ? "100px" : "50px"};
              float: left;
              transition: 0.4s;
      `;
    } else {
      return `width: 215vw;
              transition: 0.4s;
      `;
    }
  }}
  transistion: 0.4s;
`;

export const PullOutMenu = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  height: 100%;
`;

export const MenuIconWrapper = styled.div`
  transform: translate(17px);
  cursor: pointer;
  width: 100%;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  -webkit-flex-direction: row;
  float: right;
  align-items: center;
`;

export const PullOutText = styled.div`
  transform: rotate(-90deg);
  font-size: 8px;
  font-weight: 800;
`;

export const SubIconWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
`;

export const MenuIconLine = styled.div`
  display: block;
  margin-top: 2px;
  margin-bottom: 1px;
  height: 2px;
  position: aboslute;
  clear: right;
  background: black;
  width: ${(props) => {
    let width;
    switch (props.position) {
      case "top":
        width = 20;
        if (props.active) {
          width = width * 1.1;
        }
        break;
      case "middle":
        width = 24;
        if (props.active) {
          width = width * 1.5;
        }
        break;
      case "bottom":
        width = 16;
        if (props.active) {
          width = width * 1.3;
        }
        break;
      default:
        break;
    }
    width = width.toString() + "px";
    return width;
  }};
  transition: 0.2s;
`;

export const Menu = styled.div`
  height: 100%;
  width: 100%;
  background: #dfdfdf;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  -webkit-flex-direction: row;
`;

export const BackIcon = styled.div`
  cursor: pointer;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  padding-left: 10%;
`;

export const MenuContainer = styled.div`
  height: 100%;
  padding-top: 12%;
  padding-left: 5%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  transition: 0.4s;
`;

export const NavLink = styled.div`
  font-family: lato;
  cursor: pointer;
  margin: 10%;
  font-size: 200%;
  font-weight: 1200;
  width: 100%;
  transition: 0.4s;
`;
