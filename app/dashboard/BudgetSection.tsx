import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { CategoryCard } from "./shared/CategoryCard";
import { appDataAtom } from "~/jotai/appDataAtom";
import { useAtomValue } from "jotai";
import { COLORS, data } from "~/utils/constants";

export function BudgetSection() {
  const appData = useAtomValue(appDataAtom);
  return (
    <div className="flex items-center justify-around">
      <div style={{ width: 250, height: 300 }}>
        <ResponsiveContainer>
          <PieChart className="pr-0 mr0">
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
              <tspan
                x="50%"
                dy="-15"
                className="text-preset-1 font-semibold text-grey-900"
              >
                $338
              </tspan>
              <tspan x="50%" dy="35" className="text-preset-5 text-grey-500">
                of{" "}
                {appData.budgets.reduce(
                  (acc, budget) => acc + budget.maximum,
                  0,
                )}{" "}
                limit
              </tspan>
            </text>
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
            appData.budgets.find(
              (budget) => budget.category === "Entertainment",
            ),
            appData.budgets.find((budget) => budget.category === "Bills"),
            appData.budgets.find((budget) => budget.category === "Dining Out"),
            appData.budgets.find(
              (budget) => budget.category === "Personal Care",
            ),
          ].map(
            (budget) =>
              budget && (
                <CategoryCard
                  key={budget.category}
                  category={budget.category}
                  amount={budget.maximum}
                  theme={budget.theme}
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
}
