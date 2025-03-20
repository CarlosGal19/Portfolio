"use client"

import Link from "next/link";
import CIcon from "./Icons/CIcon";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import GIcon from "./Icons/GIcon";
import DesktopNavigationItem from "./Header/DesktopNavigationItem";
import MobileNavigationItem from "./Header/MobileNavigationItem";

const Links = [
    {
        href: "/about",
        text: "About"
    },
    {
        href: "/projects",
        text: "Projects"
    },
    {
        href: "/experience",
        text: "Experience"
    },
    {
        href: "/contact",
        text: "Contact"
    }
]

export default function Header() {

    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    return (
        <header
            className="flex md:justify-between justify-evenly items-center py-8 w-full px-20 h-28"
        >
            <div
                className="md:hidden absolute left-5 top-5"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                <Image
                    src="/mobile/menu.svg"
                    alt="Menu"
                    width={50}
                    height={50}
                    priority={true}
                />
            </div>
            <div
                className="flex justify-between items-center hover:cursor-pointer"
            >
                <Link href="/"
                    aria-label="Home"
                    className="flex"
                >
                    <CIcon fill="#FFFFFF" />
                    <GIcon fill="#FFFFFF" />
                </Link>
            </div>
            <nav
                className="hidden md:block"
            >
                <ul className="flex justify-evenly items-center space-x-12 text-xl font-medium">
                    {
                        Links.map((link, index) => (
                            <DesktopNavigationItem key={index} href={link.href} text={link.text} />
                        ))
                    }
                </ul>
            </nav>
            <AnimatePresence>
                {showMobileMenu && (
                    <motion.div
                        className="fixed md:hidden inset-0 bg-white bg-opacity-100 w-3/4 flex flex-col items-center justify-center z-50"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div
                            className="absolute top-5 left-5"
                            onClick={() => setShowMobileMenu(false)}
                        >
                            <Image
                                src="/mobile/close.svg"
                                alt="Close"
                                width={50}
                                height={50}
                                priority={true}
                            />
                        </div>
                        <div
                            className="mb-16"
                        >
                            <Link href="/"
                                onClick={() => setShowMobileMenu(false)}
                                aria-label="Home"
                                className="flex"
                            >
                                <CIcon fill="#000044" width={72} height={72} />
                                <GIcon fill="#000044" width={72} height={72} />
                            </Link>
                        </div>
                        <ul className="space-y-20 text-[#000044] text-2xl font-bold flex flex-col items-center">
                            {Links.map((link, index) => (
                                <MobileNavigationItem key={index} link={link} setShowMobileMenu={setShowMobileMenu} />
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
