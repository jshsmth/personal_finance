import { PotsContainer } from "~/pots/PotsContainer";
import type { Route } from "./+types/pots";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pots | Personal Finance App" },
    { name: "pots", content: "Pots" },
  ];
}

export default function Pots() {
  return <PotsContainer />;
}
