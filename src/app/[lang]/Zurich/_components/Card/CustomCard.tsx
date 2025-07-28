import { ZurichCard } from "@/types/zurich";
import Image from "next/image";

export default function CustomCard({ card, index }: { card: ZurichCard; index: number }) {
    return (
        <div
            key={index}
            className="rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
        >
            <div className="mb-4 w-full aspect-[16/10] relative rounded-md overflow-hidden">
                <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    className="object-contain"
                />
            </div>
            <p className="text-gray-300 text-center">{card.description}</p>
        </div>
    );
}
