import { TipJar } from "@phosphor-icons/react";

export function PotsSection() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="bg-beige-100 h-[6.875rem] rounded-md flex flex-col justify-center p-4">
        <div className="flex items-center">
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
      <div className="border">
        <div></div>
      </div>
    </div>
  );
}
