import RecurringBillsContainers from "~/recurring-bills/RecurringBillsContainers";
import type { Route } from "./+types/recurring-bills";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Recurring Bills | Personal Finance App" },
    { name: "recurring-bills", content: "Recurring Bills" },
  ];
}

export default function RecurringBills() {
  return <RecurringBillsContainers />;
}
