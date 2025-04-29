import languageEnglish from "@/dictionaries/en.json";
import languageSpanish from "@/dictionaries/es.json";

import Main from "../_components/Main";

export default async function Page({ params }: { params: { lang: string } }) {

    const { lang } = await params;

    const language = lang === "es" ? languageSpanish : languageEnglish;

    return (
        <Main main={language.main} />
    );
}
