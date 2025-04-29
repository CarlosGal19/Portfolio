import Link from "next/link";

export default function MobileNavigationItem({ text, setShowMobileMenu, lang, href }: { text: string, setShowMobileMenu: (showMobileMenu: boolean) => void, lang: string, href: string }) {
    return (
        <li>
            <Link
                href={`/${lang}${href}`}
                onClick={() => setShowMobileMenu(false)}
            >
                {text}
            </Link>
        </li>
    )
}
