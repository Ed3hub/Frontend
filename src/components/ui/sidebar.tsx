'use client';

import { useState } from "react";
import { FaHome, FaUser, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  activePage: 'home' | 'account';
}

export default function Sidebar({ activePage }: SidebarProps) {
  const [open, setOpen] = useState(false);

  const getNavItemClass = (page: string) =>
    `flex items-center space-x-2 px-3 py-2 rounded ${
      activePage === page
        ? 'bg-blue-100 text-blue-600 font-medium'
        : 'text-gray-600 hover:text-blue-600'
    }`;

  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      {/* Sidebar for desktop (always visible) */}
      <div className="md:fixed md:block hidden top-0 left-0 min-h-screen w-60 bg-white text-black z-40 shadow-md p-6 flex flex-col justify-between">
        {/* Top */}
        <div>
          <h1 className="text-2xl font-bold mb-8">
            <span className="bg-blue-800 text-white px-2.5 rounded">e</span>d3hub
          </h1>
          <nav className="flex flex-col space-y-4">
            <button className={getNavItemClass('home')}>
              <FaHome />
              <span>Home</span>
            </button>
            <button className={getNavItemClass('account')}>
              <FaUser />
              <span>Account</span>
            </button>
          </nav>
        </div>

        {/* Bottom */}
        <div>
          <button className="flex items-center logout-button space-x-2 text-red-500">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Hamburger & Logo for mobile */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center space-x-2">
          <span className="bg-blue-800 text-white px-2.5 mx-1 rounded">e</span>
          <span className="text-lg font-semibold text-black">d3hub</span>
        </div>
        <button onClick={toggleSidebar} className="text-blue-800 text-xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
  {open && (
    <>
      {/* Backdrop Blur */}
      <motion.div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-60 min-h-screen bg-white text-black shadow-md z-40 p-6 flex flex-col  md:hidden"
      >
        {/* Sidebar content */}
        <div>
          <h1 className="text-2xl font-bold mb-8">
            <span className="bg-blue-800 text-white px-2.5 rounded">e</span>d3hub
          </h1>
          <nav className="flex flex-col space-y-4">
            <button className={getNavItemClass('home')}>
              <FaHome />
              <span>Home</span>
            </button>
            <button className={getNavItemClass('account')}>
              <FaUser />
              <span>Account</span>
            </button>
          </nav>
        </div>

        <div>
          <button className="flex items-center space-x-2 text-red-500 logout-button">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </>
  );
}