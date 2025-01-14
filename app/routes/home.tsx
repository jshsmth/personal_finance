import { OverviewContainer } from "~/overview/OverviewContainer";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Overview | Personal Finance App" },
    { name: "overview", content: "Overview" },
  ];
}

export default function Home() {
  return <OverviewContainer />;
}
