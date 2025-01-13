import type { Route } from "./+types/pots";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Pots | Personal Finance App" },
    { name: "pots", content: "Pots" },
  ];
}

export default function Pots() {
  return (
    <div>
      <h2 className="text-preset-1 font-semibold">Pots</h2>
    </div>
  );
}
