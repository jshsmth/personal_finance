import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react'

interface DropdownProps {
  label?: string
  buttonText: string
  items: string[]
  onSelect?: (item: string) => void
}

export function Dropdown({ label, buttonText, items, onSelect }: DropdownProps) {
  return (
    <div className="flex items-center gap-2">
      {label && <span className="text-preset-4 font-normal text-grey-500">{label}</span>}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-4 py-3 text-preset-4 text-grey-900 shadow-sm ring-1 ring-inset ring-beige-500 hover:bg-gray-50">
            {buttonText}
            <CaretDown aria-hidden="true" weight="fill" className="text-grey-900 -mt-0.5" />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            {items.map((item) => (
              <MenuItem key={item}>
                <button
                  onClick={() => onSelect?.(item)}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  {item}
                </button>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  )
}
