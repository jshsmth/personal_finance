import { SpendingSummaryCard } from "./SpendingSummaryCard";
import { Plus } from "@phosphor-icons/react";

export function BudgetsContainer() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-preset-1 font-semibold">Budgets</h2>
        <button className="text-preset-4 font-semibold bg-grey-900 hover:bg-grey-500 text-white p-4 rounded-md">
          <div className="flex items-center gap-1 text-white">
            <Plus />
            <span>Add New Budget</span>
          </div>
        </button>
      </div>
      <SpendingSummaryCard />
    </div>
  );
}
