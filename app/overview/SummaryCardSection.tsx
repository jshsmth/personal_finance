import { Card } from "~/components/Card";

export function SummaryCardSection() {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 md:gap-6 sm:gap-3 gap-4 mt-8">
            <Card height="h-[7.438rem]" backgroundColor="bg-grey-900">
                <h3 className="text-preset-4 text-white">Current Balance</h3>
                <p className="text-preset-1 font-semibold text-white mt-3">$4,836.00</p>
            </Card>
            <Card height="h-[7.438rem]" backgroundColor="bg-white">
                <h3 className="text-preset-4 text-grey-500">Income</h3>
                <p className="text-preset-1 font-semibold text-grey-900 mt-3">$3,814.25</p>
            </Card>
            <Card height="h-[7.438rem]" backgroundColor="bg-white">
                <h3 className="text-preset-4 text-grey-500">Expenses</h3>
                <p className="text-preset-1 font-semibold text-grey-900 mt-3">$1,700.50</p>
            </Card>
        </div>
    );
}