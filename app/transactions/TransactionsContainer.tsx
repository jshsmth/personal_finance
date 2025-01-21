import * as React from "react";
import { Card } from "~/components/Card";
// import Dropdown from "~/components/Dropdown";
import { SearchInput } from "~/components/SearchInput";
import { Pagination } from "~/components/Pagination";
import { Dropdown } from "~/components/Dropdown";
import { Funnel, FileArrowDown } from "@phosphor-icons/react";
import { TransactionTable } from "./TransactionTable";

export function TransactionsContainer() {
  const [selectedSort, setSelectedSort] = React.useState("Latest");
  const [selectedCategory, setSelectedCategory] =
    React.useState("All Transactions");

  return (
    <React.Fragment>
      <div>
        <h2 className="text-preset-1 font-semibold mb-8">Transactions</h2>
        <Card
          height="h-[61.438rem]"
          backgroundColor="bg-white"
          className="rounded-b-none"
        >
          <div className="flex items-center justify-between">
            <div className="sm:grow sm:mr-4 md:mr-0 md:grow-[0.2]">
              <SearchInput />
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
              <Dropdown
                label="Category"
                buttonText={selectedCategory}
                items={[
                  "All Transactions",
                  "Entertainment",
                  "Bills",
                  "Groceries",
                  "Dining Out",
                  "Transportation",
                  "Personal Care",
                  "Health",
                  "Education",
                  "Other",
                ]}
                onSelect={(item) => setSelectedCategory(item)}
                MobileIcon={Funnel}
              />
            </div>
          </div>
          <div>
            <TransactionTable />
          </div>
        </Card>
        <Pagination currentPage={2} totalPages={5} />
      </div>
    </React.Fragment>
  );
}
