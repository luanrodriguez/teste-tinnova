import {
  Container,
  FormTitle,
  SpaceBetweenContainer,
  FlexContainer,
} from "./styles";
import { Button, Dialog, IconButton, LinearProgress } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { Vehicle } from "../../interfaces/Vehicle";
import { removeVehicle } from "../../http/remove-vehicle";

interface Props {
  vehicle: Vehicle;
  isOpen: boolean;
  handleClose: () => void;
  refetch: () => void;
}

export const RemoveModal: React.FC<Props> = ({
  vehicle,
  isOpen,
  handleClose,
  refetch,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitRemoveVehicle = async () => {
    try {
      setIsLoading(true);
      await removeVehicle(vehicle.id);
      handleClose();
      refetch();
    } catch {
      console.error("Não foi possível remover veículo");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Container>
        <SpaceBetweenContainer>
          <FormTitle>Remover veículo</FormTitle>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </SpaceBetweenContainer>
        <p>Tem certeza que deseja remover o veículo {vehicle.name}?</p>
        <FlexContainer>
          <Button color="inherit" variant="contained" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            color="inherit"
            variant="contained"
            onClick={submitRemoveVehicle}
          >
            Sim
          </Button>
        </FlexContainer>
        {isLoading && <LinearProgress />}
      </Container>
    </Dialog>
  );
};
