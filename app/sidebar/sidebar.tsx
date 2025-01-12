'use client'

import *  as React from "react";
import { House, Cube } from "@phosphor-icons/react";

const navigation = [
  { name: 'Overview', href: '#', icon: House, current: true },
  { name: 'Transactions', href: '#', icon: Cube, current: false },
  { name: 'Budgets', href: '#', icon: Cube, current: false },
  { name: 'Pots', href: '#', icon: Cube, current: false },
  { name: 'Recurring Bills', href: '#', icon: Cube, current: false },
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
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://filedn.com/llQAcN2w6V9BAgE3sxSdnCJ/finance_app/logo.svg"
                className="h-5 w-32"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon aria-hidden="true" className="size-6 shrink-0" />
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
