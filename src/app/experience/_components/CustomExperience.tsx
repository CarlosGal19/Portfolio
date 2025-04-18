import { Study } from "@/types/experience";
import Image from "next/image";

export default function CustomExperience({ study }: { study: Study }) {
    return (
        <div
            className="flex flex-col lg:flex-row items-center justify-center bg-[#193272] shadow-lg rounded-lg p-4 border border-[#2563eb]"
        >
            <div className="w-32 h-32 mb-4 md:mb-0 md:mr-4 flex justify-center items-center">
                <Image
                    src={study.href}
                    alt={study.alt}
                    width={150}
                    height={150}
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex flex-col items-start mt-2 md:mt-0">
                <h3 className="text-xl font-semibold">{study.name}</h3>
                <p>{study.degree}</p>
                <p className="text-md bg-[#172554] rounded-xl p-2 inline-block">{study.date}</p>
            </div>
        </div>
    );
}
