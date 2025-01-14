import { classNames } from "~/utils/classNames";

interface CardProps {
  children: React.ReactNode;
  height: string;
  backgroundColor: string;
  className?: string;
}

export function Card({
  children,
  height,
  backgroundColor,
  className,
}: CardProps) {
  return (
    <div
      className={classNames(
        "overflow-hidden rounded-lg shadow w-full",
        height,
        backgroundColor,
        className,
      )}
    >
      <div className="p-8">{children}</div>
    </div>
  );
}
