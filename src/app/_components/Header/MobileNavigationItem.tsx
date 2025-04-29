import Link from "next/link";

export default function MobileNavigationItem({ link, setShowMobileMenu, lang }: { link: { href: string, text: string }, setShowMobileMenu: (showMobileMenu: boolean) => void, lang: string }) {
    return (
        <li>
            <Link
                href={`/${lang}${link.href}`}
                onClick={() => setShowMobileMenu(false)}
            >
                {link.text}
            </Link>
        </li>
    )
}
