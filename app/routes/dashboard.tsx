import type { Route } from "./+types/dashboard";
import { DashboardContainer } from "~/dashboard/DashboardContainer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Overview | Personal Finance App" },
    { name: "overview", content: "Overview" },
  ];
}

export default function Dashboard() {
  return <DashboardContainer />;
}
