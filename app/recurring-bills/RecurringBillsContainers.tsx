import * as React from "react";
import { TotalBillsSection } from "./TotalBillsSection";
import { SummarySection } from "./SummarySection";
export default function RecurringBillsContainers() {
  return (
    <React.Fragment>
      <div>
        <h2 className="text-preset-1 font-semibold">Recurring Bills</h2>
      </div>
      <div className="grid lg:grid-cols-5 sm:grid-cols-1 sm:h-auto gap-4 lg:h-[12.75rem] mt-8">
        <div className="col-span-2 space-y-4">
          <TotalBillsSection />
          <SummarySection />
        </div>
        <div className="col-span-3">Grid 2</div>
      </div>
    </React.Fragment>
  );
}
