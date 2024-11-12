import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";

const policiesData = [
  { policy: "Policy 1", awareness: 80 },
  { policy: "Policy 2", awareness: 60 },
  { policy: "Policy 3", awareness: 90 },
  { policy: "Policy 4", awareness: 70 },
  { policy: "Policy 5", awareness: 50 },
];

const AwarenessChart = () => {
  return (
    <div>
      <p>Policy Awareness Distribution</p>
      <RadarChart outerRadius={90} width={500} height={400} data={policiesData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="policy" />
        <PolarRadiusAxis />
        <Tooltip />
        <Radar
          name="Awareness"
          dataKey="awareness"
          stroke="#226C67"
          fill="#226C67"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default AwarenessChart;
