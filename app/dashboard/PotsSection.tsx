import { TipJar } from "@phosphor-icons/react";
import { appDataAtom } from "~/jotai/appDataAtom";
import { useAtomValue } from "jotai";
import { formatCurrency } from "~/utils/formatCurrency";
import { CategoryCard } from "./shared/CategoryCard";

export function PotsSection() {
  const appData = useAtomValue(appDataAtom);
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
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
              {formatCurrency(
                appData.pots.reduce((acc, pot) => acc + pot.total, 0),
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* Ordered as per figma design */}
        {[
          appData.pots.find(pot => pot.name === "Savings"),
          appData.pots.find(pot => pot.name === "Gift"),
          appData.pots.find(pot => pot.name === "Concert Ticket"),
          appData.pots.find(pot => pot.name === "New Laptop")
        ].map((pot) => pot && (
          <CategoryCard
            key={pot.name}
            category={pot.name}
            amount={pot.total}
            theme={pot.theme}
          />
        ))}
      </div>
    </div>
  );
}

