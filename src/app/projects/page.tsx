import Projects from "./_components/Projects";
import language from "@/dictionaries/en.json";

export default function Page() {

    return (
        <Projects projects={language.projects} />
    );
}
