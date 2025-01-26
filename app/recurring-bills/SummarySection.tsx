import { Card } from "~/components/Card";

export function SummarySection() {
  return (
    <Card height="h-[13rem]" backgroundColor="bg-white">
      <div>
        <p className="text-preset-3 text-grey-900 mb-4">Summary</p>
        <SummaryRow title="Paid bills" value="4 ($190.00)" />
        <SummaryRow title="Total upcoming" value="4 ($194.98)" />
        <SummaryRow
          title="Due soon"
          value="2 ($59.98)"
          isOverdue={true}
          hasBorder={false}
        />
      </div>
    </Card>
  );
}

interface SummaryRowProps {
  title: string;
  value: string;
  isOverdue?: boolean;
  hasBorder?: boolean;
}

function SummaryRow({
  title,
  value,
  isOverdue,
  hasBorder = true,
}: SummaryRowProps) {
  return (
    <div
      className={`flex justify-between ${hasBorder ? "border-b border-grey-100 py-3" : "py-3"}`}
    >
      <p
        className={`text-preset-5 ${isOverdue ? "text-secondary-red font-semibold" : "text-grey-500"}`}
      >
        {title}
      </p>
      <p
        className={`text-preset-5 font-semibold ${isOverdue ? "text-secondary-red" : ""}`}
      >
        {value}
      </p>
    </div>
  );
}
