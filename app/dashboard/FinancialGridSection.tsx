import { Card } from "~/components/Card";
import { CaretRight } from "@phosphor-icons/react";
import { PotsSection } from "./PotsSection";
import { RecurringBillsSection } from "./RecurringBillsSection";
import { TransactionSection } from "./TransactionSection";
import { BudgetSection } from "./BudgetSection";
import { useNavigate } from "react-router";

export function FinancialGridSection() {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:h-auto gap-6 lg:h-[47.563rem]">
      <div>
        <Card height="sm:h-auto lg:h-[13.625rem]" backgroundColor="bg-white">
          <SectionHeader title="Pots" buttonText="See Details" />
          <PotsSection />
        </Card>

        <div className="mt-6" />

        <Card height="sm:h-auto lg:h-[32.438rem]" backgroundColor="bg-white">
          <SectionHeader title="Transactions" buttonText="View all" />
          <TransactionSection />
        </Card>
      </div>

      <div>
        <Card height="sm:h-auto lg:h-[25.625rem]" backgroundColor="bg-white">
          <SectionHeader title="Budgets" buttonText="See Details" />
          <BudgetSection />
        </Card>
        <div className="mt-6" />

        <Card height="h-[20.438rem]" backgroundColor="bg-white">
          <SectionHeader title="Recurring Bills" buttonText="See Details" />
          <RecurringBillsSection />
        </Card>
      </div>
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  buttonText: string;
}

function SectionHeader({ title, buttonText }: SectionHeaderProps) {
  const navigate = useNavigate();

  const getRouteForSection = (title: string) => {
    switch (title.toLowerCase()) {
      case "pots":
        return "/pots";
      case "transactions":
        return "/transactions";
      case "budgets":
        return "/budgets";
      case "recurring bills":
        return "/recurring-bills";
      default:
        return "/";
    }
  };

  return (
    <div className="flex justify-between items-center mb-5">
      <h3 className="text-preset-2 text-grey-900 font-bold">{title}</h3>
      <div className="flex items-center justify-center text-grey-500 text-preset-4">
        <button
          className="flex items-center text-grey-500 hover:text-grey-700"
          onClick={() => {
            navigate(getRouteForSection(title));
          }}
        >
          <span className="mr-2">{buttonText}</span>
          <CaretRight weight="fill" />
        </button>
      </div>
    </div>
  );
}
