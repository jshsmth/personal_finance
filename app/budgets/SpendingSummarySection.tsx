import { BudgetPieChart } from "./PieChart";

import { Card } from "~/components/Card";

export function SpendingSummarySection() {
  return (
    <Card
      height="h-[37.438rem]"
      backgroundColor="bg-white"
      className="col-span-2"
    >
      <BudgetPieChart />
      <div className="mt-8">
        <h2 className="text-preset-2 font-semibold mb-6">Spending Summary</h2>
        <div className="flex justify-between before:content-[''] before:block before:absolute before:h-[85%] before:w-1 before:bg-secondary-green before:rounded-full before:-ml-4 pl-4 relative">
          <p className="text-preset-4 text-grey-500">Entertainment</p>
          <div className="flex gap-2 items-center">
            <p className="font-semibold text-preset-3">$15.00</p>
            <span className="text-preset-5 text-grey-500">of $50.00</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
