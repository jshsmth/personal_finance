import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { CategoryCard } from "./shared/CategoryCard";
import { appDataAtom } from "~/jotai/appDataAtom";
import { useAtomValue } from "jotai";

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
  const appData = useAtomValue(appDataAtom);
  return (
    <div className="flex items-center justify-around">
      <div style={{ width: 250, height: 300 }}>
        <ResponsiveContainer>
          <PieChart  className="pr-0 mr0">
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div>
      <div className="grid grid-cols-1 gap-4">
        {/* Ordered as per figma design */}
        {[
          appData.budgets.find(budget => budget.category === "Entertainment"),
          appData.budgets.find(budget => budget.category === "Bills"),
          appData.budgets.find(budget => budget.category === "Dining Out"),
          appData.budgets.find(budget => budget.category === "Personal Care")
        ].map((budget) => budget && (
          <CategoryCard
            key={budget.category}
            category={budget.category}
            amount={budget.maximum}
            theme={budget.theme}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
