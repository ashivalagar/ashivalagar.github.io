import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  -webkit-flex-direction: row;
  overflow: hidden;
  height: 100%;
  position: fixed;
  width: 100%;
`;

export const MainWrapper = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  postion: absolute;
`;
