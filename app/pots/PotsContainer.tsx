import { SavingsSection } from "./SavingsSection";
import { GiftSection } from "./GiftSection";
import { HolidaySection } from "./HolidaySection";
import { ConcertTicketSection } from "./ConcertTicketSection";
import { NewLaptopSection } from "./NewLaptopSection";
import { Plus } from "@phosphor-icons/react";

export function PotsContainer() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-preset-1 font-semibold">Pots</h2>
        <button className="text-preset-4 font-semibold bg-grey-900 hover:bg-grey-500 text-white p-4 rounded-md">
          <div className="flex items-center gap-1">
            <Plus size={12} />
            <span>Add New Pot</span>
          </div>
        </button>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <div className="space-y-6">
          <SavingsSection />
          <GiftSection />
          <HolidaySection />
        </div>
        <div className="space-y-6">
          <ConcertTicketSection />
          <NewLaptopSection />
        </div>
      </div>
    </div>
  );
}
