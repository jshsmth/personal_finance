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
        <p className="text-preset-5 text-grey-500">{category}</p>
        <p className="text-preset-4 font-bold text-grey-900">${amount}</p>
      </div>
    </div>
  );
}
