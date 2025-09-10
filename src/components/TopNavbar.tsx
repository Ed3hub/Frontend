'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import Image from 'next/image';
import avatar from '@/assets/3d-avatar.jpg';



export default function TopNavbar() {

  // links
  const tabItems = [
      {
        key: "profile",
        label: "Profile",
        href: "/profile",
      },
      {
        key: "course-progress",
        label: "Course Progress",
        href: "/course-progress",
      },
      {
        key: "earnings",
        label: "Earnings & Engagements",
        href: "/earnings",
      },
      {
        key: "reset-password",
        label: "Reset Password",
        href: "/reset-password",
      },
      {
        key: "wallet-overview",
        label: "Wallet & Token Overview",
        href: "/wallet-overview",
      },
    ];
  




  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-50 flex justify-between items-center p-4 shadow bg-white text-black">
      <h2 className="text-lg font-semibold">Account</h2>

      {/* Right side: notification + avatar dropdown */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="relative text-gray-600 hover:text-black focus:outline-none">
          <FiBell className="text-xl" />
          {/* Future notification dot: */}
          {/* <span className="absolute -top-1 -right-1 bg-red-500 h-2 w-2 rounded-full" /> */}
        </button>

        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-90"
          >
            <Image
              src={avatar}
              alt="avatar"
              className="rounded-full w-8 h-8"
            />

            {/* Show name on medium and larger screens */}
            <span className="hidden md:block font-medium">Oluwaseyi Akeredolu</span>

            <FaChevronDown className="text-gray-600 text-sm mt-[2px]" />
          </div>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow">
              <ul className="py-1 text-sm text-gray-700">
                {tabItems.map((tab) => (
                  <li key={tab.key} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link href={tab.href}>
                      <span>{tab.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
