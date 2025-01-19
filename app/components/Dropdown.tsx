import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CaretDown, type IconWeight } from '@phosphor-icons/react'
import type { ComponentType } from 'react'

interface DropdownProps {
  label?: string
  buttonText: string
  items: string[]
  onSelect?: (item: string) => void
  MobileIcon?: ComponentType<{ className?: string, weight?: IconWeight, size?: number }>
}

export function Dropdown({ label, buttonText, items, onSelect, MobileIcon }: DropdownProps) {
  return (
    <div className="flex items-center gap-2">
      {label && <span className="hidden md:inline text-preset-4 font-normal text-grey-500">{label}</span>}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="md:inline-flex md:w-full md:items-center md:justify-center md:gap-x-1.5 md:rounded-md md:bg-white md:px-4 md:py-3 md:text-preset-4 md:text-grey-900 md:shadow-sm md:ring-1 md:ring-inset md:ring-beige-500 md:hover:bg-gray-50">
            {MobileIcon && <MobileIcon className="block md:hidden text-grey-900" weight="fill" size={20} />}
            <span className="hidden md:inline">{buttonText}</span>
            <CaretDown aria-hidden="true" weight="fill" className="hidden md:inline text-grey-900 -mt-0.5" />
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
