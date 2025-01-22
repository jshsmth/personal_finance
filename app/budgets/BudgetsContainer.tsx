import { Plus } from "@phosphor-icons/react";
import { EntertainmentSection } from "./EntertainmentSection";
import { SpendingSummarySection } from "./SpendingSummarySection";
import { BillsSection } from "./BillsSection";
import { DiningOutSection } from "./DiningOutSection";
import { PersonalCareSection } from "./PersonalCareSection";

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
      <div className="grid sm:grid-cols-1 lg:grid-cols-5 gap-4 mt-8">
        <SpendingSummarySection />
        <div className="grid grid-cols-1 gap-4 col-span-3">
          <EntertainmentSection />
          <BillsSection />
          <DiningOutSection />
          <PersonalCareSection />
        </div>
      </div>
    </div>
  );
}
