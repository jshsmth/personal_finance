import { Card } from "~/components/Card";

export function FinancialGridSection() {
    return (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 h-[47.563rem]">
            <div>
                <Card height="h-[13.625rem]" backgroundColor="bg-white">
                    <h3 className="text-preset-2 text-grey-900 font-semibold mb-5">Pots</h3>
                    Content
                </Card>

                <div className="mt-6" />

                <Card height="h-[32.438rem]" backgroundColor="bg-white">
                    <h3 className="text-preset-2 text-grey-900 font-semibold mb-5">Transactions</h3>
                    Content
                </Card>
            </div>

            <div>
                <Card height="h-[25.625rem]" backgroundColor="bg-white">
                    <h3 className="text-preset-2 text-grey-900 font-semibold mb-5">Budgets</h3>
                    Content
                </Card>
                <div className="mt-6" />

                <Card height="h-[20.438rem]" backgroundColor="bg-white">
                    <h3 className="text-preset-2 text-grey-900 font-semibold mb-5">Recurring Bills</h3>
                    Content
                </Card>


            </div>
        </div>
    );
}