import language from "@/dictionaries/en.json";
import About from "./_components/About";

export default function Page() {

    return (
        <About about={language.about} />
    );
}
