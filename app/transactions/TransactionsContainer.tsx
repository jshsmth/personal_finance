import { appDataAtom } from "~/jotai/appDataAtom";
import { useAtomValue } from "jotai";
import * as React from "react";
import { Card } from "~/components/Card";
// import Dropdown from "~/components/Dropdown";
import { SearchInput } from "~/components/SearchInput";
export function TransactionsContainer() {
  const appData = useAtomValue(appDataAtom);
  return (
    <React.Fragment>
      <div>
        <h2 className="text-preset-1 font-semibold mb-8">Transactions</h2>
        <Card height="h-[61.438rem]" backgroundColor="bg-white">
          <div>
            <SearchInput />
          </div>
          <div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-gray-300">
                    <thead className="border-b border-grey-100">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-preset-5 font-normal text-grey-500 sm:pl-0"
                        >
                          Recipient / Sender
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-preset-5 font-normal text-grey-500"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-preset-5 font-normal text-grey-500"
                        >
                          Transaction Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-preset-5 font-normal text-grey-500 text-right"
                        >
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-grey-100 bg-white">
                      {appData.transactions.map((transaction) => {
                        const avatarPath =
                          "/app" +
                          (transaction.avatar.startsWith("./")
                            ? transaction.avatar.slice(1)
                            : transaction.avatar);
                        return (
                          <tr key={transaction.name}>
                            <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                              <div className="flex items-center">
                                <div className="text-preset-4 font-bold shrink-0">
                                  <img
                                    alt={transaction.name}
                                    src={avatarPath}
                                    className="size-10 rounded-full"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="font-medium text-gray-900">
                                    {transaction.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-preset-5 text-grey-500 px-3 py-3.5 ">
                              {transaction.category}
                            </td>
                            <td className="text-preset-5 text-grey-500 px-3 py-3.5 ">
                              {new Date(
                                transaction.date,
                              ).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </td>
                            <td className="whitespace-nowrap px-3 py-5 text-sm text-right">
                              <div className="space-y-1">
                                <span
                                  className={
                                    transaction.amount >= 0
                                      ? "text-secondary-green text-preset-4 font-bold"
                                      : ""
                                  }
                                >
                                  {transaction.amount >= 0 ? "+" : "-"}$
                                  {Math.abs(transaction.amount).toFixed(2)}
                                </span>
                                <div className="text-preset-5 text-grey-500">
                                  {new Date(
                                    transaction.date,
                                  ).toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                  })}
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
}
