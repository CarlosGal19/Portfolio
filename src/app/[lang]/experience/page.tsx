import languageEnglish from "@/dictionaries/en.json";
import languageSpanish from "@/dictionaries/es.json";
import Experience from "./_components/Experience";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {

    const { lang } = await params;

    const language = lang === "es" ? languageSpanish : languageEnglish;

    return (
        <Experience experience={language.experience} />
    )

}
