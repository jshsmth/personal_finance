import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { appDataAtom } from "~/jotai/appDataAtom";
import { COLORS, data } from "~/utils/constants";
import { useAtomValue } from "jotai";

export function BudgetPieChart() {
  const appData = useAtomValue(appDataAtom);
  return (
    <div className="flex justify-center" style={{ width: "100%", height: 300 }}>
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
              {appData.budgets.reduce((acc, budget) => acc + budget.maximum, 0)}{" "}
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
  );
}
