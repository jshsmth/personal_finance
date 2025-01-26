import { Card } from "~/components/Card";
import { DotsThree } from "@phosphor-icons/react";

export function ConcertTicketSection() {
  return (
    <Card height="h-[18.938rem]" backgroundColor="bg-white">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-secondary-navy"></div>
          <h2 className="text-preset-2 font-semibold">Concert Ticket</h2>
        </div>
        <div className="rounded-full hover:bg-grey-100 cursor-pointer">
          <DotsThree size={30} className="text-grey-300 hover:text-grey-500" />
        </div>
      </div>
    </Card>
  );
}
