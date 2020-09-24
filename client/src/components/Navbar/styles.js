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
`;

export const PullOutText = styled.div`
  transform: rotate(-90deg);
  font-size: 8px;
  font-weight: 500;
`;

export const SubIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
`;

export const MenuIconLine = styled.div`
  margin-top: 2px;
  margin-bottom: 1px;
  height: 2px;
  float: right;
  clear: right;
  background: black;
  width: 16px;
  transition: all 400ms cubic-bezier(0.7, 0, 0.3, 1) 0ms;
`;
