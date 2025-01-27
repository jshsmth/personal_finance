import * as React from "react";
import { TotalBillsSection } from "./TotalBillsSection";
import { SummarySection } from "./SummarySection";
import { BillsTable } from "./BillsTable";
import { Card } from "~/components/Card";
import { SearchInput } from "~/components/SearchInput";
import { Dropdown } from "~/components/Dropdown";
import { FileArrowDown } from "@phosphor-icons/react";
export default function RecurringBillsContainers() {
  const [selectedSort, setSelectedSort] = React.useState("Latest");
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
        <div className="col-span-3">
          <Card height="h-[46.375rem]" backgroundColor="bg-white">
            <div className="flex items-center justify-between">
              <div className="sm:grow sm:mr-4 md:mr-0 md:grow-[0.2]">
                <SearchInput placeholder="Search bills" />
              </div>
              <div className="flex items-center gap-4">
                <Dropdown
                  label="Sort by"
                  buttonText={selectedSort}
                  items={[
                    "Latest",
                    "Oldest",
                    "A to Z",
                    "Z to A",
                    "Highest",
                    "Lowest",
                  ]}
                  onSelect={(item) => setSelectedSort(item)}
                  MobileIcon={FileArrowDown}
                />
              </div>
            </div>
            <BillsTable />
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}
