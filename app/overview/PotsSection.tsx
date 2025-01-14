import { TipJar } from "@phosphor-icons/react";
import { classNames } from "~/utils/classNames";

export function PotsSection() {
  return (
    <div className="grid grid-cols-2 gap-5 p-4">
      <div className="bg-beige-100 h-[6.875rem] rounded-lg flex flex-col justify-center">
        <div className="flex items-center p-4">
          <TipJar
            size={40}
            weight="light"
            className="text-secondary-green mr-4"
          />
          <div>
            <p className="text-preset-4 text-grey-500">Total Saved</p>
            <div className="mt-3" />
            <p className="text-preset-1 font-bold text-grey-900">$850</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <CategoryCard category="Savings" amount={159} palette="green" />
        <CategoryCard category="Gift" amount={40} palette="cyan" />
        <CategoryCard category="Concert Ticket" amount={110} palette="navy" />
        <CategoryCard category="New Laptop" amount={10} palette="yellow" />
      </div>
    </div>
  );
}

interface CategoryCardProps {
  category: string;
  amount: number;
  palette: "green" | "cyan" | "navy" | "yellow";
}

export function CategoryCard({ category, amount, palette }: CategoryCardProps) {
  return (
    <div className={classNames(
      'bg-white border-l-4 rounded-sm h-[2.688rem]',
      palette === 'green' ? 'border-secondary-green' : undefined,
      palette === 'cyan' ? 'border-secondary-cyan' : undefined,
      palette === 'navy' ? 'border-secondary-navy' : undefined,
      palette === 'yellow' ? 'border-secondary-yellow' : undefined
    )}>
      <div className="pl-4">
        <p className="text-preset-4 text-grey-500">{category}</p>
        <p className="text-preset-4 font-bold text-grey-900">${amount}</p>
      </div>
    </div>
  );
}
