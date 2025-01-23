import { Card } from "~/components/Card";

export function EntertainmentSection() {
  return (
    <Card height="h-[31.875rem]" backgroundColor="bg-white">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-4 h-4 rounded-full bg-secondary-green"></div>
        <h2 className="text-preset-2 font-semibold">Entertainment</h2>
      </div>
      <p className="text-preset-4 text-grey-500 mb-4 font-normal">
        Maximum of $50.00
      </p>
      <div className="overflow-hidden rounded-md bg-grey-100 p-1">
        <div
          style={{ width: "37.5%" }}
          className="h-6 rounded-sm bg-secondary-green"
        />
      </div>
    </Card>
  );
}
