import { SummaryCardSection } from "./SummaryCardSection";
import { FinancialGridSection } from "./FinancialGridSection";

export function OverviewContainer() {
  return (
    <div>
      <h2 className="text-preset-1 font-semibold">Overview</h2>
      <SummaryCardSection />
      <div className="mt-8" />
      <FinancialGridSection />
    </div>
  );
}
