import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const GenderDistrubution = () => {
  const genderData = [
    { name: "Male", value: 60 },
    { name: "Female", value: 40 },
  ];

  const COLORS = ["#226C67", "#DCEEEC"];
  return (
    <div>
      <p>Gender Distribution</p>
      <PieChart width={400} height={400}>
        <Pie
          data={genderData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#226C67"
          label
        >
          {genderData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default GenderDistrubution;
