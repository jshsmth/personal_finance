"use client";

import * as React from "react";
import {
  House,
  Receipt,
  ArrowsDownUp,
  ChartDonut,
  TipJar,
} from "@phosphor-icons/react";
import { useNavigate, useLocation } from "react-router";
import { classNames } from "~/utils/classNames";

const navigation = [
  { name: "Overview", href: "/", icon: <House size={24} weight="fill" /> },
  {
    name: "Transactions",
    href: "/transactions",
    icon: <ArrowsDownUp size={24} weight="fill" />,
  },
  {
    name: "Budgets",
    href: "/budgets",
    icon: <ChartDonut size={24} weight="fill" />,
  },
  { name: "Pots", href: "/pots", icon: <TipJar size={24} weight="fill" /> },
  {
    name: "Recurring Bills",
    href: "/recurring-bills",
    icon: <Receipt size={24} weight="fill" />,
  },
];

interface SidebarProps {
  children: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = React.useState(location.pathname);

  React.useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

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
                  {navigation.map((item) => {
                    const isActive = currentPath === item.href;
                    return (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPath(item.href);
                            navigate(item.href);
                          }}
                          className={classNames(
                            isActive
                              ? "bg-beige-100 text-beige-500 border-l-4 border-secondary-green text-preset-3"
                              : "text-grey-300 hover:bg-gray-300 hover:text-white text-preset-3",
                            "group flex gap-x-4 rounded-r-lg px-6 py-4 text-base/6 font-medium",
                          )}
                        >
                          <span
                            className={classNames(
                              "shrink-0",
                              isActive
                                ? "text-secondary-green"
                                : "text-grey-300",
                            )}
                          >
                            {item.icon}
                          </span>
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-10">{children}</div>
      </main>
    </React.Fragment>
  );
}
