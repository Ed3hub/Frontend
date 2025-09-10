'use client';

import Link from "next/link";
import { FaComments, FaLayerGroup, FaVideo, FaUsers } from "react-icons/fa";

interface NavbarProps {
  activeTab: "discussions" | "course-groups" | "qna" | "network";
}

export default function Navbar({ activeTab }: NavbarProps) {
  const tabItems = [
    {
      key: "discussions",
      label: "Discussions",
      href: "/discussions",
      icon: <FaComments className="text-base sm:text-lg" />,
    },
    {
      key: "course-groups",
      label: "My Course Groups",
      href: "/course-groups",
      icon: <FaLayerGroup className="text-base sm:text-lg" />,
    },
    {
      key: "qna",
      label: "Live Q&As",
      href: "/qna",
      icon: <FaVideo className="text-base sm:text-lg" />,
    },
    {
      key: "network",
      label: "Network",
      href: "/network",
      icon: <FaUsers className="text-base sm:text-lg" />,
    },
  ];

  const tabClasses = (key: string) =>
    `flex items-center justify-center sm:justify-start gap-2 px-3 py-2 rounded-full text-sm sm:text-base font-medium transition whitespace-nowrap
     ${
       activeTab === key
         ? "bg-[#3B82F6]/10 text-[#3B82F6]"
         : "text-gray-600 hover:bg-gray-100"
     }`;

  return (
    <nav
      className="w-full px-2 sm:px-4 py-2 flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 justify-between"
    >
      {tabItems.map((tab) => (
        <Link key={tab.key} href={tab.href} className={tabClasses(tab.key)}>
          {tab.icon}
          <span>{tab.label}</span>
        </Link>
      ))}
    </nav>
  );
}







/*import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggleButton } from './ui/theme-toggle-button';
import { Filter, Search } from 'lucide-react';*/


/*const NavItems = [
    { title: 'Home', href: '/home' },
    { title: 'Languages', href: '/languages' },
    { title: 'Tutors', href: '/tutors' },
    { title: 'Community', href: '/community' },
    { title: 'Chat with tutor', href: '/chat-with-tutor' },
];

export default function Navbar() {
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState<boolean>(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (latest > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <div className="text-black dark:text-white border text-sm tracking-wider font-poppins font-normal">
            <motion.nav
                animate={{
                    boxShadow: scrolled ? '0 0 10px 0 rgba(0, 0, 0, 0.1)' : 'none',
                    width: scrolled ? '65%' : '90vw',
                    y: scrolled ? 5 : 1,
                    borderRadius: scrolled ? '50px' : '15px',
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                }}
                className="z-50 fixed inset-x-0 top-2 px-3 pr-5 py-1 mx-auto flex items-center justify-between bg-white/5 backdrop-blur-sm"
            >
                <Image
                    src="/logo/ed3hub-dark-1.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="size-13 rounded-full object-cover"
                />
                <div className="flex items-center gap-8">
                    {NavItems.map((item, idx) => (
                        <Link
                            href={item.href}
                            key={idx}
                            className="relative px-2 py-1 capitalize tracking-wide"
                            onMouseEnter={() => setIsHovered(idx)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            {isHovered === idx && (
                                <motion.div
                                    layoutId="hovered-span"
                                    className=""
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 20,
                                    }}
                                />
                            )}
                            <span className="relative z-10">{item.title}</span>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-8">
                <ThemeToggleButton className="size-4 cursor-pointer" variant="circle-blur" start="top-right" />
                    <Search className="size-4 cursor-pointer" />
                    <Filter className="size-4 cursor-pointer" />
                </div>
            </motion.nav>
        </div>
    );
}*/