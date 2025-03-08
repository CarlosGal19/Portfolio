import { Work } from "@/types/experience";
import Image from "next/image";

export default function CustomWork({ work }: { work: Work }) {
    return (
        <div className="flex flex-col items-start bg-[#193272] shadow-lg rounded-lg p-6 gap-4 border border-[#2563eb]">
            <div className="w-full flex justify-start items-center">
                <Image
                    src={work.href}
                    alt={work.alt}
                    width={200}
                    height={200}
                    className="object-cover shadow-md"
                />
            </div>
            <ul className="flex flex-wrap gap-2 mt-2">
                {work.technologies.map((tech, index) => (
                    <li
                        key={index}
                        className="pr-3"
                    >
                        <Image
                            src={tech}
                            alt={tech}
                            width={48}
                            height={48}
                            className="object-cover shadow-md"
                        />
                    </li>
                ))}
            </ul>
            <div className="flex flex-col w-full space-y-2 text-white">
                <div className="flex justify-start items-center gap-4">
                    <p className="text-md font-semibold text-gray-300 text-center lg:text-left bg-[#2563eb] rounded-xl p-1">
                        {work.date}
                    </p>
                    <p className="text-md lg:text-base font-semibold text-center lg:text-left bg-[#172554] rounded-xl p-1">
                        {work.position}
                    </p>
                </div>
                <h3 className="text-2xl font-bold text-left">{work.company}</h3>
                <p className="text-sm lg:text-base text-center lg:text-left">{work.description}</p>
            </div>
        </div>
    );
}
