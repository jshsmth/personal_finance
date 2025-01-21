import { useAtomValue } from "jotai";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Card } from "~/components/Card";
import { appDataAtom } from "~/jotai/appDataAtom";
import { COLORS, data } from "~/utils/constants";

export function SpendingSummaryCard() {
  const appData = useAtomValue(appDataAtom);
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-5 gap-4 mt-8">
      <Card
        height="h-[37.438rem]"
        backgroundColor="bg-white"
        className="col-span-2"
      >
        <div
          className="flex justify-center"
          style={{ width: "100%", height: 300 }}
        >
          <ResponsiveContainer>
            <PieChart className="pr-0 mr0">
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
              >
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
      </Card>
      <div className="grid grid-cols-1 gap-4 col-span-3">
        <Card height="h-[31.875rem]" backgroundColor="bg-white">
          <p>Right Card 1</p>
        </Card>
        <Card height="h-[31.875rem]" backgroundColor="bg-white">
          <p>Right Card 2</p>
        </Card>
        <Card height="h-[31.875rem]" backgroundColor="bg-white">
          <p>Right Card 3</p>
        </Card>
        <Card height="h-[31.875rem]" backgroundColor="bg-white">
          <p>Right Card 4</p>
        </Card>
      </div>
    </div>
  );
}
