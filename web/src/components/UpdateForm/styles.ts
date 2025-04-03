import styled from "styled-components";
import { styled as muiStyled, TextField } from "@mui/material";
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

export const CloseButton = styled.button`
  border: none;
  background-color: ${Colors.WHITE};
  font-size: 22px;
  cursor: pointer;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const TextfieldContainer = styled.div`
  width: 100%;
`;

export const StyledTextfield = muiStyled(TextField)({
  "& .MuiInputBase-input": {
    color: Colors.WHITE,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: Colors.WHITE,
    },
    "&:hover fieldset": {
      borderColor: Colors.WHITE,
    },
    "&.Mui-focused fieldset": {
      color: Colors.WHITE,
    },
  },
  marginTop: "5px",
});
