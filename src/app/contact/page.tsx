import language from '@/dictionaries/en.json';
import Contact from './_components/Contact';

export default function Page() {

    return (
        <Contact contact={language.contact} />
    )
}
