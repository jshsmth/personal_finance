import { classNames } from "~/utils/classNames";

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
