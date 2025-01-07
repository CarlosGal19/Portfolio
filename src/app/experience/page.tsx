import language from "@/dictionaries/en.json";
import Experience from "./_components/Experience";

export default function Page() {

    return (
        <Experience experience={language.experience} />
    )

}
