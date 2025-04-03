import styled from "styled-components";
import { Colors } from "../../enums/Colors";

export const Container = styled.div`
  width: 400px;
  height: 180px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${Colors.BLACK}5A;
`;

export const GraphTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
`;

export const GraphContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
