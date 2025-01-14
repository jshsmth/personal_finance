import { TipJar } from "@phosphor-icons/react";
import { appDataAtom } from "~/jotai/appDataAtom";
import { useAtomValue } from "jotai";
import { formatCurrency } from "~/utils/formatCurrency";

export function PotsSection() {
  const appData = useAtomValue(appDataAtom);
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5 p-4">
      <div className="bg-beige-100 rounded-lg flex flex-col justify-center">
        <div className="flex items-center p-4">
          <TipJar
            size={40}
            weight="light"
            className="text-secondary-green mr-4"
          />
          <div>
            <p className="text-preset-4 text-grey-500">Total Saved</p>
            <div className="mt-3" />
            <p className="text-preset-1 font-bold text-grey-900">
              {formatCurrency(appData.pots.reduce((acc, pot) => acc + pot.total, 0))}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {appData.pots.slice(0, 4).map((pot) => (
          <CategoryCard key={pot.name} category={pot.name} amount={pot.total} theme={pot.theme} />
        ))}
      </div>
    </div>
  );
}

interface CategoryCardProps {
  category: string;
  amount: number;
  theme: string;
}

export function CategoryCard({ category, amount, theme }: CategoryCardProps) {
  return (
    <div 
      className="bg-white rounded-sm h-[2.688rem]"
      style={{ borderLeft: `4px solid ${theme}` }}
    >
      <div className="pl-4">
        <p className="text-preset-4 text-grey-500">{category}</p>
        <p className="text-preset-4 font-bold text-grey-900">${amount}</p>
      </div>
    </div>
  );
}
