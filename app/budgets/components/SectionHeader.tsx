import { CaretRight } from "@phosphor-icons/react";

interface SectionHeaderProps {
  title: string;
  buttonText: string;
}

export function SectionHeader({ title, buttonText }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-preset-3 text-grey-900 font-semibold">{title}</h3>
      <div className="flex items-center justify-center text-grey-500 text-preset-4">
        <button className="flex items-center text-grey-500 hover:text-grey-700">
          <span className="mr-2">{buttonText}</span>
          <CaretRight weight="fill" />
        </button>
      </div>
    </div>
  );
}
