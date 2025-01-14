import type { Route } from "./+types/recurring-bills";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Recurring Bills | Personal Finance App" },
    { name: "recurring-bills", content: "Recurring Bills" },
  ];
}

export default function RecurringBills() {
  return (
    <div>
      <h2 className="text-preset-1 font-semibold">Recurring Bills</h2>
    </div>
  );
}
