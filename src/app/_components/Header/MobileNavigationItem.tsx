import Link from "next/link";

export default function MobileNavigationItem({ link, setShowMobileMenu }: { link: { href: string, text: string }, setShowMobileMenu: (showMobileMenu: boolean) => void }) {
    return (
        <li>
            <Link
                href={link.href}
                onClick={() => setShowMobileMenu(false)}
            >
                {link.text}
            </Link>
        </li>
    )
}
