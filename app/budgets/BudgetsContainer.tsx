import { Card } from "~/components/Card";

export function BudgetsContainer() {
  return (
    <div>
      <h2 className="text-preset-1 font-semibold">Budgets</h2>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <Card height="h-[37.438rem]" backgroundColor="bg-white">
          <p>Left Card</p>
        </Card>
        <div className="grid grid-cols-1 gap-4">
          <Card height="h-[31.875rem]" backgroundColor="bg-white">
            <p>Right Card 1</p>
          </Card>
          <Card height="h-[31.875rem]" backgroundColor="bg-white">
            <p>Right Card 2</p>
          </Card>
          <Card height="h-[31.875rem]" backgroundColor="bg-white">
            <p>Right Card 3</p>
          </Card>
          <Card height="h-[31.875rem]" backgroundColor="bg-white">
            <p>Right Card 4</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
