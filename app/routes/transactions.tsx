import type { Route } from "./+types/transactions";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Transactions | Personal Finance App" },
    { name: "transactions", content: "Transactions" },
  ];
}

export default function Transactions() {
  return (
    <div>
      Transactions
    </div>
  );
}
