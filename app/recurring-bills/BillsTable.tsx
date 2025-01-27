import { appDataAtom } from "~/jotai/appDataAtom";
import { useAtomValue } from "jotai";

export function BillsTable() {
  const appData = useAtomValue(appDataAtom);
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-grey-300">
            <thead className="border-b border-grey-100">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-preset-5 font-normal text-grey-500 sm:pl-0"
                >
                  Bill Title
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-preset-5 font-normal text-grey-500 hidden md:table-cell"
                >
                  Due Date
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
              {appData.transactions
                .filter((transaction) => transaction.recurring)
                .slice(0, 8)
                .map((transaction, index) => {
                  const avatarPath =
                    "/app" +
                    (transaction.avatar.startsWith("./")
                      ? transaction.avatar.slice(1)
                      : transaction.avatar);
                  return (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="text-preset-4 font-bold shrink-0">
                            <img
                              alt={transaction.name}
                              src={avatarPath}
                              className="size-8 rounded-full"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {transaction.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-preset-5 text-grey-500 px-3 py-3.5 hidden md:table-cell">
                        {`Monthly - ${new Date(transaction.date).getDate()}${
                          new Date(transaction.date).getDate() === 1
                            ? "st"
                            : new Date(transaction.date).getDate() === 2
                              ? "nd"
                              : new Date(transaction.date).getDate() === 3
                                ? "rd"
                                : "th"
                        }`}
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
  );
}
