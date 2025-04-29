import Projects from "./_components/Projects";
import languageEnglish from "@/dictionaries/en.json";
import languageSpanish from "@/dictionaries/es.json";

export default async function Page({ params }: { params: { lang: string } }) {

    const { lang } = await params;

    const language = lang === "es" ? languageSpanish : languageEnglish;


    return (
        <Projects projects={language.projects} />
    );
}
