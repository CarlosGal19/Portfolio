import languageEnglish from '@/dictionaries/en.json';
import languageSpanish from '@/dictionaries/es.json';
import Contact from './_components/Contact';

export default async function Page({ params }: { params: { lang: string } }) {

    const { lang } = await params;

    const language = lang === "es" ? languageSpanish : languageEnglish;

    return (
        <Contact contact={language.contact} />
    )
}
