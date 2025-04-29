import languageEnglish from "@/dictionaries/en.json";
import languageSpanish from "@/dictionaries/es.json";

import Main from "../_components/Main";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {

    const { lang } = await params;

    if (!lang || (lang !== "es" && lang !== "en")) {
        redirect("/en");
    }

    const language = lang === "es" ? languageSpanish : languageEnglish;

    return (
        <Main main={language.main} />
    );
}
