"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UpdateLanguage({ lang }: { lang: string }) {
    const pathname = usePathname();
    const langToUpdate = lang === "es" ? "en" : "es";
    const parts = pathname.split("/").filter(Boolean);
    const restOfPath = parts.slice(1).join("/");

    return (
        <li className="cursor-pointer">
            <Link href={`/${langToUpdate}/${restOfPath}`} className="hover:text-blue-200">
                <Image
                    src={lang === 'es' ? "/languages/usa.svg" : "/languages/spain.svg"}
                    alt="Language"
                    width={30}
                    height={30}
                    priority={true}
                />
            </Link>
        </li>
    );
}
