import { MagnifyingGlass } from "@phosphor-icons/react";

export function SearchInput() {
    return (
      <div>
        <label htmlFor="search" className="sr-only">
          Quick search
        </label>
        <div>
          <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-beige-500 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-beige-500">
            <input
              id="search"
              name="search"
              type="text"
              className="block min-w-0 grow px-4 py-2.5 text-base text-gray-900 placeholder:text-beige-500 placeholder:font-sans focus:outline focus:outline-0 sm:text-sm/6"
              placeholder="Search transaction"
            />
            <div className="flex py-2.5 pr-2.5">
              <div className="inline-flex items-center px-2 text-grey-900">
              <MagnifyingGlass size={17} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }