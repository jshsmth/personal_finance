import { appDataAtom } from "~/jotai/appDataAtom";
import { useAtomValue } from "jotai";

interface TransactionTableProps {
  currentPage: number;
  itemsPerPage?: number;
}

export function TransactionTable({
  currentPage,
  itemsPerPage = 10,
}: TransactionTableProps) {
  const appData = useAtomValue(appDataAtom);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTransactions = appData.transactions.slice(
    startIndex,
    endIndex,
  );

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
                  Recipient / Sender
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-preset-5 font-normal text-grey-500 hidden md:table-cell"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-preset-5 font-normal text-grey-500 hidden md:table-cell"
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
              {paginatedTransactions.map((transaction, index) => {
                const avatarPath =
                  "/app" +
                  (transaction.avatar.startsWith("./")
                    ? transaction.avatar.slice(1)
                    : transaction.avatar);
                return (
                  <tr key={startIndex + index}>
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
                    <td className="text-preset-5 text-grey-500 px-3 py-3.5 hidden md:table-cell">
                      {transaction.category}
                    </td>
                    <td className="text-preset-5 text-grey-500 px-3 py-3.5 hidden md:table-cell">
                      {new Date(transaction.date).toLocaleDateString("en-GB", {
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
                          {new Date(transaction.date).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            },
                          )}
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
  );
}
