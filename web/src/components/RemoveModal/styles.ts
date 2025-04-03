import styled from "styled-components";
import { Colors } from "../../enums/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 15px;
  gap: 10px;
  background-color: ${Colors.PURPLE};
`;

export const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;
