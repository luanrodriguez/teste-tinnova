import "./default.css";
import { VehiclesTable } from "./components/VehiclesTable";
import { GraphCard } from "./components/GraphCard";
import { Container, Content, Header, Title, FlexContainer } from "./styles";
import { useEffect, useState } from "react";
import { getAllVehicles } from "./http/get-all-vehicles";
import { Vehicle } from "./interfaces/Vehicle";
import { RegisterForm } from "./components/RegisterForm";
import { Button, LinearProgress } from "@mui/material";
import { UpdateForm } from "./components/UpdateForm";
import { RemoveModal } from "./components/RemoveModal";
import { graphColors } from "./constants/graph-colors";
import { isWithinInterval, parseISO, subDays } from "date-fns";

function MainPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isRegisterVehicleFormOpen, setIsRegisterVehicleFormOpen] =
    useState<boolean>(false);
  const [isUpdateVehicleFormOpen, setIsUpdateVehicleFormOpen] =
    useState<boolean>(false);
  const [isRemoveVehicleModalOpen, setIsRemoveVehicleModalOpen] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const today = new Date();
  const sevenDaysAgo = subDays(today, 7);

  const handleCloseRegisterVehicleForm = () => {
    setIsRegisterVehicleFormOpen(false);
  };

  const handleCloseUpdateVehicleForm = () => {
    setSelectedVehicle(null);
    setIsUpdateVehicleFormOpen(false);
  };

  const handleCloseRemoveVehicleModal = () => {
    setSelectedVehicle(null);
    setIsRemoveVehicleModalOpen(false);
  };

  const handleEditVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsUpdateVehicleFormOpen(true);
  };

  const handleRemoveVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsRemoveVehicleModalOpen(true);
  };

  const soldVehicles = vehicles.filter(({ sold }) => sold);

  const soldVehiclesData = [
    { name: "Vendidos", value: soldVehicles.length, fill: graphColors[0] },
    {
      name: "Não vendidos",
      value: vehicles.length - soldVehicles.length,
      fill: graphColors[1],
    },
  ];

  const groupedDecades = vehicles.reduce((acc, vehicle) => {
    const decade = Math.floor(vehicle.year / 10) * 10;
    const decadeKey = decade.toString();

    acc[decadeKey] = (acc[decadeKey] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const decadeVehiclesData = Object.entries(groupedDecades).map(
    ([decade, count], index) => ({
      name: decade,
      value: count,
      fill: graphColors[index],
    })
  );

  const groupedBrands = vehicles.reduce((acc, vehicle) => {
    const brandKey = vehicle.brand;

    acc[brandKey] = (acc[brandKey] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const brandVehiclesData = Object.entries(groupedBrands).map(
    ([brand, count], index) => ({
      name: brand,
      value: count,
      fill: graphColors[index],
    })
  );

  const vehiclesCreatedLastWeek = vehicles.filter(({ createdAt }) =>
    isWithinInterval(parseISO(createdAt), { start: sevenDaysAgo, end: today })
  );

  const handleGetAllVehicles = async () => {
    try {
      setIsLoading(true);
      const vehiclesData = await getAllVehicles();
      setVehicles(vehiclesData);
    } catch {
      console.error("Não foi possível buscar veículos");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllVehicles();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Teste Tinnova - Veículos</Title>
      </Header>
      {isLoading && <LinearProgress />}
      <Content>
        <FlexContainer>
          <GraphCard
            graphTitle="Vendidos e não vendidos"
            graphData={soldVehiclesData}
          />
          <GraphCard
            graphTitle="Separados por década"
            graphData={decadeVehiclesData}
          />
        </FlexContainer>
        <GraphCard
          graphTitle="Separados por marca"
          graphData={brandVehiclesData}
        />
        <FlexContainer>
          <VehiclesTable
            tableTitle="Veículos"
            vehicles={vehicles}
            handleEdit={handleEditVehicle}
            handleRemove={handleRemoveVehicle}
          />
          <VehiclesTable
            tableTitle="Veículos cadastrados na última semana"
            vehicles={vehiclesCreatedLastWeek}
            handleEdit={handleEditVehicle}
            handleRemove={handleRemoveVehicle}
          />
        </FlexContainer>
        <Button
          color="inherit"
          variant="contained"
          onClick={() => setIsRegisterVehicleFormOpen(true)}
        >
          Cadastrar veículo
        </Button>
        <RegisterForm
          isOpen={isRegisterVehicleFormOpen}
          handleClose={handleCloseRegisterVehicleForm}
          refetch={handleGetAllVehicles}
        />
        {selectedVehicle && (
          <UpdateForm
            vehicle={selectedVehicle}
            isOpen={isUpdateVehicleFormOpen}
            handleClose={handleCloseUpdateVehicleForm}
            refetch={handleGetAllVehicles}
          />
        )}
        {selectedVehicle && (
          <RemoveModal
            vehicle={selectedVehicle}
            isOpen={isRemoveVehicleModalOpen}
            handleClose={handleCloseRemoveVehicleModal}
            refetch={handleGetAllVehicles}
          />
        )}
      </Content>
    </Container>
  );
}

export default MainPage;
