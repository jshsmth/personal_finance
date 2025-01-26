import { SavingsSection } from "./SavingsSection";
import { GiftSection } from "./GiftSection";
import { HolidaySection } from "./HolidaySection";
import { ConcertTicketSection } from "./ConcertTicketSection";
import { NewLaptopSection } from "./NewLaptopSection";

export function PotsContainer() {
  return (
    <div>
      <h2 className="text-preset-1 font-semibold">Pots</h2>
      <div className="grid grid-cols-2 gap-4 mt-8">
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
