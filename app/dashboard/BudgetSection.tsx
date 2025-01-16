import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const colors = fullConfig.theme.colors;

const data = [
  { name: "Group A", value: 120 },
  { name: "Group B", value: 25 },
  { name: "Group C", value: 50 },
  { name: "Group D", value: 50 },
];

const COLORS = [
  colors.secondary.cyan,
  colors.secondary.green,
  colors.secondary.navy,
  colors.secondary.yellow,
];

export function BudgetSection() {
  return (
    <div style={{ width: '100%', height: 500 }}>
    <ResponsiveContainer>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={100}
          cy={130}
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
