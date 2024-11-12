import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const EffectivenessChart = () => {
  const effectivenessData = [
    { scale: 1, count: 5 },
    { scale: 2, count: 10 },
    { scale: 3, count: 15 },
    { scale: 4, count: 25 },
    { scale: 5, count: 30 },
    { scale: 6, count: 20 },
    { scale: 7, count: 15 },
    { scale: 8, count: 10 },
    { scale: 9, count: 5 },
    { scale: 10, count: 5 },
  ];

  return (
    <div>
      <p>Policy Effectiveness Distribution</p>
      <LineChart width={500} height={300} data={effectivenessData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="scale"
          label={{
            value: "Scale (1-10)",
            position: "insideBottom",
            offset: -5,
          }}
        />
        <YAxis label={{ value: "Count", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#226C67"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default EffectivenessChart;
