import { BudgetsContainer } from "~/budgets/BudgetsContainer";
import type { Route } from "./+types/budgets";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Budgets | Personal Finance App" },
    { name: "budgets", content: "Budgets" },
  ];
}

export default function Budgets() {
  return (
    <BudgetsContainer />
  );
}
