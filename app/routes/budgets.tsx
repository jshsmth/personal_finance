import type { Route } from "./+types/budgets";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Budgets | Personal Finance App" },
    { name: "budgets", content: "Budgets" },
  ];
}

export default function Budgets() {
  return (
    <div>
      <h2 className="text-preset-1 font-semibold">Budgets</h2>
    </div>
  );
}
