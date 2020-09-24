import styled from "styled-components";

export const NavWrapper = styled.div`
  width: ${(props) => (props.active ? "100px" : "50px")};
  height: 100%;
  float: left;
  transition: 0.2s;
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
  transform: translate(39px);
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
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 8px;
  margin-top: none;
  margin-bottom: none;
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
