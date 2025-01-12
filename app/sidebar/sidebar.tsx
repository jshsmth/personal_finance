'use client'

import *  as React from "react";
import { House, Cube } from "@phosphor-icons/react";

const navigation = [
  { name: 'Overview', href: '#', icon: <House size={24} weight="fill" />, current: true },
  { name: 'Transactions', href: '#', icon: <Cube size={24} />, current: false },
  { name: 'Budgets', href: '#', icon: <Cube size={24} />, current: false },
  { name: 'Pots', href: '#', icon: <Cube size={24} />, current: false },
  { name: 'Recurring Bills', href: '#', icon: <Cube size={24} />, current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


interface SidebarProps {
  children: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {

  return (
    <React.Fragment>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col bg-grey-900 rounded-r-3xl">
        <div className="flex grow flex-col gap-y-4 overflow-y-auto pl-0 pr-8">
          <div className="flex h-24 shrink-0 items-center pl-8 pr-4">
            <img
              alt="Your Company"
              src="https://filedn.com/llQAcN2w6V9BAgE3sxSdnCJ/finance_app/logo.svg"
              className="h-8 w-32"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-beige-100 text-beige-500 border-l-4 border-secondary-green text-preset-3'
                            : 'text-grey-300 hover:bg-gray-300 hover:text-white text-preset-3',
                          'group flex gap-x-4 rounded-r-lg px-6 py-4 text-base/6 font-medium',
                        )}
                      >
                        <span
                          className={classNames(
                            'shrink-0',
                            item.current ? 'text-secondary-green' : 'text-grey-300'
                          )}
                        >
                          {item.icon}
                        </span>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </React.Fragment>
  )
}
