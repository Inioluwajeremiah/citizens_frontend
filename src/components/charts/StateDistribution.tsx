import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const StateDistribution = () => {
  const stateData = [
    { state: "Lagos", count: 30 },
    { state: "Abuja", count: 20 },
    { state: "Kano", count: 15 },
    { state: "Rivers", count: 10 },
  ];
  return (
    <div>
      <p>State Distribution</p>
      <BarChart width={500} height={300} data={stateData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="state" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#226C67" />
      </BarChart>
    </div>
  );
};

export default StateDistribution;
