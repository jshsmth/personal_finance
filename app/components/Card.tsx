import { classNames } from "~/utils/classNames";

interface CardProps {
    children: React.ReactNode;
    height: string;
    backgroundColor: string;
}

export function Card({ children, height, backgroundColor }: CardProps) {
    return (
        <div className={classNames(
            "overflow-hidden rounded-lg shadow w-full",
            height,
            backgroundColor
        )}>
            <div className="p-6 sm:p-6">
                {children}
            </div>
        </div>
    );
}

