import { formatCurrency } from "~/utils/formatCurrency";

export function RecurringBillsSection() {
  return (
    <div className="grid grid-rows-3 gap-3 mt-8">
      <RecurringBillCard
        title="Paid Bills"
        amount={190}
        theme="secondary-green"
      />
      <RecurringBillCard
        title="Total Upcoming"
        amount={194.98}
        theme="secondary-yellow"
      />
      <RecurringBillCard
        title="Due Soon"
        amount={59.98}
        theme="secondary-cyan"
      />
    </div>
  );
}

interface RecurringBillCardProps {
  title: string;
  amount: number;
  theme: "secondary-green" | "secondary-yellow" | "secondary-cyan";
}

export function RecurringBillCard({
  title,
  amount,
  theme,
}: RecurringBillCardProps) {
  const themeColors = {
    "secondary-green": "border-secondary-green",
    "secondary-yellow": "border-secondary-yellow",
    "secondary-cyan": "border-secondary-cyan",
  };

  return (
    <div>
      <div
        className={`bg-beige-100 rounded-md border-l-4 h-[3.813rem] flex justify-between p-5 ${themeColors[theme]}`}
      >
        <p>{title}</p>
        <p>{formatCurrency(amount)}</p>
      </div>
    </div>
  );
}
