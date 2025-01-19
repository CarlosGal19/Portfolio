import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DesktopNavigationItem({ href, text }: { href: string, text: string }) {

    const pathName = usePathname();

    return (
        <li
            className="cursor-pointer"
        >
            <Link
                href={href}
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
