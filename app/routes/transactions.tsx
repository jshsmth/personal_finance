import type { Route } from "./+types/transactions";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Transactions | Personal Finance App" },
    { name: "transactions", content: "Transactions" },
  ];
}

export default function Transactions() {
  return (
    <div>
      <h2 className="text-preset-1 font-semibold">Transactions</h2>
    </div>
  );
}
