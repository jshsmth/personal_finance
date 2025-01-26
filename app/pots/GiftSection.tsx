import { Card } from "~/components/Card";
import { DotsThree, Plus } from "@phosphor-icons/react";

export function GiftSection() {
  return (
    <Card height="h-[18.938rem]" backgroundColor="bg-white">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-secondary-cyan"></div>
          <h2 className="text-preset-2 font-semibold">Gift</h2>
        </div>
        <div className="rounded-full hover:bg-grey-100 cursor-pointer">
          <DotsThree size={30} className="text-grey-300 hover:text-grey-500" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <p className="text-preset-4 text-grey-500">Total Saved</p>
        <p className="text-preset-1 font-semibold">$40</p>
      </div>
      <div className="overflow-hidden rounded-md bg-grey-100 mt-4">
        <div
          style={{ width: "66.6%" }}
          className="h-2 rounded-md bg-secondary-cyan"
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-preset-5 text-grey-500 font-semibold">66.6%</p>
        <p className="text-preset-5 text-grey-500">Target of $60</p>
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
