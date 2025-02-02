import * as React from "react";
import { Card } from "~/components/Card";
// import Dropdown from "~/components/Dropdown";
import { SearchInput } from "~/components/SearchInput";
import { Pagination } from "~/transactions/Pagination";
import { Dropdown } from "~/components/Dropdown";
import { Funnel, FileArrowDown } from "@phosphor-icons/react";
import { TransactionTable } from "./TransactionTable";
import { appDataAtom } from "~/jotai/appDataAtom";
import { useAtomValue } from "jotai";

export function TransactionsContainer() {
  const appData = useAtomValue(appDataAtom);
  const [selectedSort, setSelectedSort] = React.useState("Latest");
  const [selectedCategory, setSelectedCategory] =
    React.useState("All Transactions");
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(appData.transactions.length / 10);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

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
              <SearchInput placeholder="Search transaction" />
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
            <TransactionTable currentPage={currentPage} />
          </div>
        </Card>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </React.Fragment>
  );
}
