import { TableVirtuoso } from "react-virtuoso";
import { Vehicle } from "../../interfaces/Vehicle";
import { Container, TableCell, TableHead, TableTitle } from "./styles";
import { IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Colors } from "../../enums/Colors";

interface Props {
  tableTitle: string;
  vehicles: Vehicle[];
  handleEdit: (vehicle: Vehicle) => void;
  handleRemove: (vehicle: Vehicle) => void;
}

export const VehiclesTable: React.FC<Props> = ({
  tableTitle,
  vehicles,
  handleEdit,
  handleRemove,
}) => {
  const tableHeaders = ["Nome", "Marca", "Ano", "Descrição", "Vendido"];

  return (
    <Container>
      <TableTitle>{tableTitle}</TableTitle>
      <TableVirtuoso
        style={{ height: "280px" }}
        data={vehicles}
        fixedHeaderContent={() => (
          <tr>
            {tableHeaders.map((head) => (
              <TableHead>{head}</TableHead>
            ))}
            <TableHead>Editar</TableHead>
            <TableHead>Remover</TableHead>
          </tr>
        )}
        itemContent={(_, vehicle) => (
          <>
            <TableCell>{vehicle.name}</TableCell>
            <TableCell>{vehicle.brand}</TableCell>
            <TableCell>{vehicle.year}</TableCell>
            <TableCell>{vehicle.description}</TableCell>
            <TableCell>{vehicle.sold ? "Sim" : "Não"}</TableCell>
            <TableCell>
              <IconButton onClick={() => handleEdit(vehicle)}>
                <Edit sx={{ color: Colors.WHITE }} />
              </IconButton>
            </TableCell>
            <TableCell>
              <IconButton onClick={() => handleRemove(vehicle)}>
                <Delete sx={{ color: Colors.WHITE }} />
              </IconButton>
            </TableCell>
          </>
        )}
      />
    </Container>
  );
};
