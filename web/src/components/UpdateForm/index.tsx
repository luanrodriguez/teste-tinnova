import { Formik, FormikHelpers } from "formik";
import {
  Container,
  FormTitle,
  SpaceBetweenContainer,
  FlexContainer,
  StyledForm,
  TextfieldContainer,
  StyledTextfield,
} from "./styles";
import { Button, Checkbox, Dialog, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Vehicle } from "../../interfaces/Vehicle";
import { updateVehicle } from "../../http/update-vehicle";
import { Colors } from "../../enums/Colors";

interface Props {
  vehicle: Vehicle;
  isOpen: boolean;
  handleClose: () => void;
  refetch: () => void;
}

interface Params {
  name: string;
  brand: string;
  year: number;
  description: string;
  sold: boolean;
}

export const UpdateForm: React.FC<Props> = ({
  vehicle,
  isOpen,
  handleClose,
  refetch,
}) => {
  const submitUpdateVehicle = async (
    { name, description, brand, sold, year }: Params,
    { setSubmitting }: FormikHelpers<Params>
  ) => {
    try {
      setSubmitting(true);
      await updateVehicle({
        id: vehicle.id,
        name,
        description,
        brand,
        sold,
        year,
      });
      handleClose();
      refetch();
    } catch {
      console.error("Não foi possível atualizar veículo");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Container>
        <SpaceBetweenContainer>
          <FormTitle>Atualizar veículo</FormTitle>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </SpaceBetweenContainer>
        <Formik
          initialValues={{
            name: vehicle.name,
            description: vehicle.description,
            brand: vehicle.brand,
            year: vehicle.year,
            sold: vehicle.sold,
          }}
          onSubmit={submitUpdateVehicle}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <StyledForm onSubmit={handleSubmit}>
              <FlexContainer>
                <TextfieldContainer>
                  <p>Nome</p>
                  <StyledTextfield
                    size="small"
                    name="name"
                    placeholder="Adicione o nome"
                    value={values.name}
                    onChange={handleChange}
                    fullWidth
                  />
                </TextfieldContainer>
                <TextfieldContainer>
                  <p>Marca</p>
                  <StyledTextfield
                    size="small"
                    name="brand"
                    placeholder="Adicione a marca"
                    value={values.brand}
                    onChange={handleChange}
                    fullWidth
                  />
                </TextfieldContainer>
              </FlexContainer>
              <FlexContainer>
                <TextfieldContainer>
                  <p>Ano</p>
                  <StyledTextfield
                    size="small"
                    name="year"
                    placeholder="Adicione o ano"
                    value={values.year}
                    onChange={handleChange}
                    fullWidth
                  />
                </TextfieldContainer>
                <TextfieldContainer>
                  <p>Descrição</p>
                  <StyledTextfield
                    size="small"
                    name="description"
                    placeholder="Adicione a descrição"
                    value={values.description}
                    onChange={handleChange}
                    fullWidth
                  />
                </TextfieldContainer>
              </FlexContainer>
              <FlexContainer>
                <p>Vendido</p>
                <Checkbox
                  sx={{ color: Colors.WHITE }}
                  name="sold"
                  checked={values.sold}
                  onChange={handleChange}
                  color="default"
                />
              </FlexContainer>

              <Button
                color="inherit"
                variant="contained"
                type="submit"
                disabled={
                  isSubmitting ||
                  !values.description ||
                  !values.name ||
                  !values.brand ||
                  !values.year
                }
              >
                Atualizar
              </Button>
            </StyledForm>
          )}
        </Formik>
      </Container>
    </Dialog>
  );
};
