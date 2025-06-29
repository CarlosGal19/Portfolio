import languageEnglish from "@/dictionaries/en.json";
import languageSpanish from "@/dictionaries/es.json";
import Zurich from "./_components/Zurich";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {

    const { lang } = await params;

    const language = lang === "es" ? languageSpanish : languageEnglish;

    return (
        <Zurich zurich={language.zurich} />
    );
}
