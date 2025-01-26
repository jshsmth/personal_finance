import * as React from "react";
import TotalBillsCard from "./TotalBillsCard";

export default function RecurringBillsContainers() {
  return (
    <React.Fragment>
      <div>
        <h2 className="text-preset-1 font-semibold">Recurring Bills</h2>
      </div>
      <div className="grid lg:grid-cols-5 sm:grid-cols-1 sm:h-auto gap-4 lg:h-[12.75rem] mt-8">
        <div className="col-span-2 text-white">
          <TotalBillsCard />
        </div>
        <div className="col-span-3">Grid 2</div>
      </div>
    </React.Fragment>
  );
}
