import { Study } from "@/types/experience";
import Image from "next/image";

export default function CustomExperience({ study }: { study: Study }) {
    return (
        <div
            className="flex flex-col lg:flex-row items-center justify-center bg-[#00004f] shadow-lg rounded-lg p-4"
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
            <div className="flex flex-col mt-8 md:mt-0">
                <h3 className="text-xl font-semibold">{study.name}</h3>
                <p>{study.degree}</p>
                <p className="text-sm">{study.date}</p>
            </div>
        </div>
    );
}
