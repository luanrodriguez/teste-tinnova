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
import { createVehicle } from "../../http/create-vehicle";
import { Colors } from "../../enums/Colors";

interface Props {
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

export const RegisterForm: React.FC<Props> = ({
  isOpen,
  handleClose,
  refetch,
}) => {
  const submitCreateVehicle = async (
    { name, description, brand, sold, year }: Params,
    { setSubmitting }: FormikHelpers<Params>
  ) => {
    try {
      setSubmitting(true);
      await createVehicle({ name, description, brand, sold, year });
      handleClose();
      refetch();
    } catch {
      console.error("Não foi possível criar veículo");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Container>
        <SpaceBetweenContainer>
          <FormTitle>Cadastrar veículo</FormTitle>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </SpaceBetweenContainer>
        <Formik
          initialValues={{
            name: "",
            description: "",
            brand: "",
            year: 0,
            sold: false,
          }}
          onSubmit={submitCreateVehicle}
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
                  color="default"
                  name="sold"
                  checked={values.sold}
                  onChange={handleChange}
                  sx={{ color: Colors.WHITE }}
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
                Adicionar
              </Button>
            </StyledForm>
          )}
        </Formik>
      </Container>
    </Dialog>
  );
};
