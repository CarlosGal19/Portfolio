import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DesktopNavigationItem({ href, text }: { href: string, text: string }) {

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
