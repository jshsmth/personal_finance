import { Card } from "~/components/Card";
import { classNames } from "~/utils/classNames";

export function EntertainmentSection() {
  return (
    <Card height="h-[31.875rem]" backgroundColor="bg-white">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-4 h-4 rounded-full bg-secondary-green"></div>
        <h2 className="text-preset-2 font-semibold">Entertainment</h2>
      </div>
      <p className="text-preset-4 text-grey-500 mb-4 font-normal">
        Maximum of $50.00
      </p>
      <div className="overflow-hidden rounded-md bg-grey-100 p-1">
        <div
          style={{ width: "37.5%" }}
          className="h-6 rounded-sm bg-secondary-green"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 mb-5">
        <CategoryCard category="Spent" amount={15} color="secondary-green" />
        <CategoryCard category="Remaining" amount={35} color="beige-100" />
      </div>
      <div className="h-[15.875rem] bg-beige-100 rounded-md">CONTENT</div>
    </Card>
  );
}

interface CategoryCardProps {
  category: string;
  amount: number;
  color: string;
}

export function CategoryCard({ category, amount, color }: CategoryCardProps) {
  const colorClasses = {
    "secondary-green": "border-l-secondary-green",
    "secondary-cyan": "border-l-secondary-cyan",
    "secondary-yellow": "border-l-secondary-yellow",
    "secondary-navy": "border-l-secondary-navy",
    "beige-100": "border-l-beige-100",
  };

  return (
    <div
      className={classNames(
        "bg-white rounded-sm h-[2.688rem]",
        "border-l-4",
        colorClasses[color as keyof typeof colorClasses],
      )}
    >
      <div className="pl-4">
        <p className="text-preset-5 text-grey-500">{category}</p>
        <p className="text-preset-4 font-bold text-grey-900">${amount}</p>
      </div>
    </div>
  );
}
