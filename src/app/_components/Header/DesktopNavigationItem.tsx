import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DesktopNavigationItem({ href, text, lang }: { href: string, text: string, lang: string }) {

    const pathName = usePathname();

    return (
        <li
            className="cursor-pointer"
        >
            <Link
                href={`/${lang}${href}`}
                className={`hover:text-blue-200 ${pathName === href ? "text-blue-200" : ""}`}
            >
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 1 }}

                >
                    {text}
                </motion.div>
            </Link>
        </li>
    )
}
