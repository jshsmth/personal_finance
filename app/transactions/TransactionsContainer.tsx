import * as React from "react";
import { Card } from "~/components/Card";
// import Dropdown from "~/components/Dropdown";
import { SearchInput } from "~/components/SearchInput";
export function TransactionsContainer() {
  return (
    <React.Fragment>
      <div>
        <h2 className="text-preset-1 font-semibold">Transactions</h2>
        <Card height="h-[61.438rem]" backgroundColor="bg-white">
            <div>
                <SearchInput />
            </div>
        </Card>
      </div>
    </React.Fragment>
  );
}
