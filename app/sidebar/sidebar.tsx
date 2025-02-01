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
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[18.75rem] lg:flex-col bg-grey-900 rounded-r-3xl">
        <div className="flex grow flex-col gap-y-4 overflow-y-auto pl-0 pr-8">
          <div className="flex h-24 shrink-0 items-center pl-8 pr-4">
            <img
              alt="Your Company"
              src="https://filedn.com/llQAcN2w6V9BAgE3sxSdnCJ/finance_app/logo.svg"
              className="h-8 w-32"
            />
          </div>
          <nav className="flex flex-1 flex-col">
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
                          : "text-grey-300 hover:bg-grey-900 hover:text-beige-100 hover:border-l-4 hover:border-secondary-green text-preset-3",
                        "group flex gap-x-4 rounded-r-lg px-6 py-4 text-base/6 font-medium transition-all duration-200 ease-in-out",
                      )}
                    >
                      <span
                        className={classNames(
                          "shrink-0",
                          isActive ? "text-secondary-green" : "text-grey-300",
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
          </nav>
        </div>
      </div>

      {/* Tablet sidebar */}
      <div className="lg:hidden md:block hidden fixed bottom-0 left-0 right-0 z-50 bg-grey-900 h-[4.625rem] rounded-t-md">
        <nav className="h-full max-w-[80%] mx-auto">
          <ul role="list" className="flex justify-between items-center h-full">
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
                      "flex flex-col items-center gap-1 py-2 px-4 transition-all duration-200 ease-in-out",
                      isActive
                        ? "text-grey-900 bg-beige-100 border-b-4 border-secondary-green rounded-t-md w-[6.5rem] whitespace-nowrap"
                        : "text-grey-300 hover:text-beige-100 hover:bg-grey-900 hover:border-b-4 hover:border-secondary-green w-[6.5rem] whitespace-nowrap rounded-t-md",
                    )}
                  >
                    <span
                      className={classNames(
                        "shrink-0",
                        isActive ? "text-secondary-green" : "text-grey-300",
                      )}
                    >
                      {item.icon}
                    </span>
                    <span className="text-xs font-medium">{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile sidebar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-grey-900 h-14 rounded-t-md">
        <nav className="h-full max-w-[80%] mx-auto">
          <ul role="list" className="flex justify-between items-center h-full">
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
                      "flex p-3 transition-all duration-200 ease-in-out",
                      isActive
                        ? "text-grey-900 bg-beige-100 border-b-4 border-secondary-green rounded-t-md w-[4.163rem] items-center justify-center"
                        : "text-grey-300 hover:text-beige-100 hover:bg-grey-900 hover:border-b-4 hover:border-secondary-green items-center justify-center w-[4.163rem] rounded-t-md",
                    )}
                  >
                    <span
                      className={classNames(
                        "shrink-0",
                        isActive ? "text-secondary-green" : "text-grey-300",
                      )}
                    >
                      {item.icon}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <main className="py-10 lg:pl-[18.75rem]">
        <div className="px-4 sm:px-6 lg:px-10 sm:pb-20">{children}</div>
      </main>
    </React.Fragment>
  );
}
