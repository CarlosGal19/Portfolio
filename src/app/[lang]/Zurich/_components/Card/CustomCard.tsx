import { ZurichCard } from "@/types/zurich";
import Image from "next/image";

export default function CustomCard({card, index}: {card: ZurichCard, index: number}) {
    return (
        <div
            key={index}
            className="rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-[#193272] border border-[#2563eb]"
        >
            <div className="mb-4">
                <Image
                    src={card.img}
                    alt={card.alt}
                    width={400}
                    height={250}
                    className="rounded-md w-full object-cover"
                />
            </div>
            <p className="text-white">{card.description}</p>
        </div>
    )
}
