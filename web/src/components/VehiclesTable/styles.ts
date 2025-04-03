import styled from "styled-components";
import { Colors } from "../../enums/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 700px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${Colors.BLACK}5A;
`;

export const TableTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

export const TableHead = styled.th`
  text-align: left;
  padding: 10px;
  background-color: #542554;
  width: 150px;
  color: white;
`;

export const TableCell = styled.td`
  text-align: left;
  padding: 10px;
  width: 150px;
  color: ${Colors.WHITE};
`;
