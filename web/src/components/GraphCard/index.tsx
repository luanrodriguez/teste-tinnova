import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { Container, GraphContainer, GraphTitle } from "./styles";

interface Props {
  graphTitle: string;
  graphData: { name: string; value: number }[];
}

export const GraphCard: React.FC<Props> = ({ graphTitle, graphData }) => {
  return (
    <Container>
      <GraphTitle>{graphTitle}</GraphTitle>
      <GraphContainer>
        <PieChart width={200} height={130}>
          <Pie data={graphData} dataKey="value" nameKey="name" />
          <Tooltip />
          <Legend
            align="right"
            layout="vertical"
            verticalAlign="middle"
            iconSize={8}
          />
        </PieChart>
      </GraphContainer>
    </Container>
  );
};
