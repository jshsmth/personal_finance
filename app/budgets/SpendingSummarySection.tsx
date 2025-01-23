import { BudgetPieChart } from "./PieChart";
import { Card } from "~/components/Card";
import { classNames } from "~/utils/classNames";

export function SpendingSummarySection() {
  return (
    <Card
      height="h-[42em]"
      backgroundColor="bg-white"
      className="col-span-2"
    >
      <BudgetPieChart />
      <div className="mt-6">
        <h2 className="text-preset-2 font-semibold mb-6">Spending Summary</h2>
        <div className="flex flex-col gap-6 mt-6">
          <SpendingSummaryItem
            color="secondary-green"
            category="Entertainment"
            amount={15}
            totalAmount={50}
          />
          <SpendingSummaryItem
            color="secondary-cyan"
            category="Bills"
            amount={150}
            totalAmount={750}
          />
          <SpendingSummaryItem
            color="secondary-yellow"
            category="Dining Out"
            amount={133}
            totalAmount={75}
          />
          <SpendingSummaryItem
            color="secondary-navy"
            category="Personal Care"
            amount={40}
            totalAmount={50}
            hasBorder={false}
          />
        </div>
      </div>
    </Card>
  );
}

export function SpendingSummaryItem({
  color,
  category,
  amount,
  totalAmount,
  hasBorder = true,
}: {
  color: string;
  category: string;
  amount: number;
  totalAmount: number;
  hasBorder?: boolean;
}) {
  return (
    <div
      className={classNames(
        "flex justify-between relative pl-4 pb-4",
        hasBorder ? "border-b border-grey-100" : "",
        "before:content-[''] before:block before:absolute before:h-[85%] before:w-1 before:rounded-full before:-ml-4",
        `before:bg-${color}`,
      )}
    >
      <p className="text-preset-4 text-grey-500">{category}</p>
      <div className="flex gap-2 items-center">
        <p className="font-semibold text-preset-3">${amount.toFixed(2)}</p>
        <span className="text-preset-5 text-grey-500">
          of ${totalAmount.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
