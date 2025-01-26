import { Card } from "~/components/Card";
import { Receipt } from "@phosphor-icons/react";

export function TotalBillsSection() {
  return (
    <Card height="h-[11.875rem]" backgroundColor="bg-grey-900">
      <div className="flex flex-col gap-3 justify-center text-white">
        <Receipt size={50} />
        <p className="text-preset-4 font-light">Total Bills</p>
        <p className="text-preset-1 font-semibold">$384.98</p>
      </div>
    </Card>
  );
}
