import { Card } from "~/components/Card";
import { DotsThree, Plus } from "@phosphor-icons/react";

export function NewLaptopSection() {
  return (
    <Card height="h-[18.938rem]" backgroundColor="bg-white">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-secondary-yellow"></div>
          <h2 className="text-preset-2 font-semibold">New Laptop</h2>
        </div>
        <div className="rounded-full hover:bg-grey-100 cursor-pointer">
          <DotsThree size={30} className="text-grey-300 hover:text-grey-500" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <p className="text-preset-4 text-grey-500">Total Saved</p>
        <p className="text-preset-1 font-semibold">$10.00</p>
      </div>
      <div className="overflow-hidden rounded-md bg-grey-100 mt-4">
        <div
          style={{ width: "1%" }}
          className="h-2 rounded-md bg-secondary-yellow"
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-preset-5 text-grey-500 font-semibold">1%</p>
        <p className="text-preset-5 text-grey-500">Target of $1000</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <button className="text-preset-4 font-semibold bg-beige-100 hover:bg-grey-300 text-grey-900 p-4 rounded-md hover:text-white">
          <div className="flex items-center justify-center gap-1">
            <Plus size={12} />
            <span>Add Money</span>
          </div>
        </button>
        <button className="text-preset-4 font-semibold bg-beige-100 hover:bg-grey-300 text-grey-900 p-4 rounded-md hover:text-white">
          <div className="flex items-center justify-center gap-1">
            <span>Withdraw</span>
          </div>
        </button>
      </div>
    </Card>
  );
}
