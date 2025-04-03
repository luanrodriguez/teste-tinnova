import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  height: 100px;
`;

export const Title = styled.h1`
  font-size: 32px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 10px;
  gap: 50px;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 100px;
`;
