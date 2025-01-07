"use client"

import Link from "next/link";
import CIcon from "./Icons/CIcon";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

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
                    src="/menu.svg"
                    alt="Menu"
                    width={50}
                    height={50}
                    priority={true}
                />
            </div>
            <motion.div
                className="flex justify-between items-center hover:cursor-pointer"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.75 }}
            >
                <Link href="/"
                    aria-label="Home"
                >
                    <CIcon />
                </Link>
            </motion.div>
            <nav
                className="hidden md:block"
            >
                <ul className="flex justify-evenly items-center space-x-12 text-xl font-medium">
                    {
                        Links.map((link, index) => (
                            <CustomListItem key={index} href={link.href} text={link.text} />
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
                                src="/close.svg"
                                alt="Close"
                                width={50}
                                height={50}
                                priority={true}
                            />
                        </div>
                        <ul className="space-y-20 text-[#000044] text-2xl font-bold">
                            {Links.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setShowMobileMenu(false)}
                                        className="hover:text-blue-300"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

function CustomListItem({ href, text }: { href: string, text: string }) {

    const pathName = usePathname();

    return (
        <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
        >
            <Link
                href={href}
                className={`hover:text-blue-200 ${pathName === href ? "text-blue-200" : ""}`}
            >
                {text}
            </Link>
        </motion.li>
    )
}
