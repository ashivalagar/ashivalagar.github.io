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
`;

export const ContentWrapper = styled.div`
  display: block;
  display: -webkit-block;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
