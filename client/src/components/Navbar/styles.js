import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 50px;
  height: 100%;
`;

export const PullOutMenu = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  -webkit-flex-direction: row;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  height: 100%;
`;

export const PullOutText = styled.div`
  transform: rotate(-90deg);
  font-size: 8px;
  font-weight: 500;
`;
