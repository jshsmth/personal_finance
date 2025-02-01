import { Card } from "~/components/Card";
import { CategoryCard } from "./components/CategoryCard";
import { SectionHeader } from "./components/SectionHeader";
import { appDataAtom } from "~/jotai/appDataAtom";
import { useAtomValue } from "jotai";
import { DotsThree } from "@phosphor-icons/react";

export function PersonalCareSection() {
  return (
    <Card height="h-[31.875rem]" backgroundColor="bg-white">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-secondary-navy"></div>
          <h2 className="text-preset-2 font-semibold">Personal Care</h2>
        </div>
        <div className="rounded-full hover:bg-grey-100 cursor-pointer">
          <DotsThree size={30} className="text-grey-300 hover:text-grey-500" />
        </div>
      </div>
      <p className="text-preset-4 text-grey-500 mb-4 font-normal">
        Maximum of $100.00
      </p>
      <div className="overflow-hidden rounded-md bg-grey-100 p-1">
        <div
          style={{ width: "20%" }}
          className="h-6 rounded-xs bg-secondary-navy"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 mb-5">
        <CategoryCard category="Spent" amount={40} color="secondary-navy" />
        <CategoryCard category="Remaining" amount={60} color="beige-100" />
      </div>
      <div className="h-[15.875rem] bg-beige-100 rounded-md p-5">
        <SectionHeader title="Lastest Spending" buttonText="See All" />
        <PersonalCareTable />
      </div>
    </Card>
  );
}

export function PersonalCareTable() {
  const appData = useAtomValue(appDataAtom);
  const personalCareTransactions = appData.transactions.filter(
    (transaction) => transaction.category === "Personal Care",
  );
  return (
    <div className="px-4 sm:px-6 lg:px-5">
      <div>
        <div className="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full align-middle sm:px-6 lg:px-4">
            <table className="min-w-full">
              <tbody className="divide-y divide-grey-500/25">
                {personalCareTransactions
                  .slice(0, 3)
                  .map((transaction, index) => {
                    const avatarPath =
                      "/app" +
                      (transaction.avatar.startsWith("./")
                        ? transaction.avatar.slice(1)
                        : transaction.avatar);
                    return (
                      <tr key={index}>
                        <td className="py-4 pr-3 m:pl-0">
                          <div className="text-preset-4 items-center flex gap-4">
                            <img
                              alt={transaction.name}
                              src={avatarPath}
                              className="size-8 rounded-full"
                            />
                            <p className="text-grey-900 text-preset-5 font-semibold">
                              {transaction.name}
                            </p>
                          </div>
                        </td>
                        <td className="px-3 py-0 text-right">
                          <p className="text-grey-900 font-semibold text-preset-5 mb-1">
                            {transaction.amount >= 0 ? "$" : "-$"}
                            {Math.abs(transaction.amount).toFixed(2)}
                          </p>

                          <p className="text-grey-500 text-preset-5">
                            {new Date(transaction.date).toLocaleDateString(
                              "en-GB",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              },
                            )}
                          </p>
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
  );
}
