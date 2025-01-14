import { Card } from "~/components/Card";
import { CaretRight } from "@phosphor-icons/react";
import { PotsSection } from "./PotsSection";

export function FinancialGridSection() {
    return (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 h-[47.563rem]">
            <div>
                <Card height="h-[13.625rem]" backgroundColor="bg-white">
                    <SectionHeader title="Pots" buttonText="See Details" />
                    <PotsSection />
                </Card>

                <div className="mt-6" />

                <Card height="h-[32.438rem]" backgroundColor="bg-white">
                    <SectionHeader title="Transactions" buttonText="View all" />
                    Content
                </Card>
            </div>

            <div>
                <Card height="h-[25.625rem]" backgroundColor="bg-white">
                    <SectionHeader title="Budgets" buttonText="See Details" />
                    Content
                </Card>
                <div className="mt-6" />

                <Card height="h-[20.438rem]" backgroundColor="bg-white">
                    <SectionHeader title="Recurring Bills" buttonText="See Details" />
                    Content
                </Card>
            </div>
        </div>
    );
}

interface SectionHeaderProps {
    title: string;
    buttonText: string;
}

function SectionHeader({ title, buttonText }: SectionHeaderProps) {
    return (
        <div className="flex justify-between items-center mb-5">
            <h3 className="text-preset-2 text-grey-900 font-semibold">{title}</h3>
            <div className="flex items-center justify-center text-grey-500 text-preset-4">
                <button className="flex items-center text-grey-500 hover:text-grey-700">
                    <span className="mr-2">{buttonText}</span>
                    <CaretRight weight="fill" />
                </button>
            </div>
        </div>
    );
}