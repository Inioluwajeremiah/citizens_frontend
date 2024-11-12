import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { COLORS } from "../../utils/colors";

const AgeRangeDistribution = ({}) => {
  const ageData = [
    { name: "15-24", value: 25 },
    { name: "25-34", value: 35 },
    { name: "35-44", value: 20 },
    { name: "45-54", value: 10 },
    { name: "55-64", value: 10 },
  ];
  return (
    <div>
      <p>Age Distribution</p>
      <PieChart width={400} height={400}>
        <Pie
          data={ageData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#226C67"
          label
        >
          {ageData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default AgeRangeDistribution;
