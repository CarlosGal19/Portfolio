import languageEnglish from "@/dictionaries/en.json";
import languageSpanish from "@/dictionaries/es.json";
import About from "./_components/About";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {

    const { lang } = await params;

    const language = lang === "es" ? languageSpanish : languageEnglish;

    return (
        <About about={language.about} />
    );
}
