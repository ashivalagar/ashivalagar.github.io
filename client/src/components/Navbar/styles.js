import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 50px;
  height: 100%;
  float: left;
  &:hover {
    width: 8vw;
    transition: 0.2s;
  }
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
  cursor: pointer;
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
