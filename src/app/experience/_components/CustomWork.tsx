import { Work } from "@/types/experience";
import Image from "next/image";

export default function CustomWork({ work }: { work: Work }) {
    return (
        <div className="flex flex-col items-center lg:items-start bg-[#00004f] shadow-lg rounded-lg p-6 gap-4">
            <div className="w-full flex justify-center items-center">
                <Image
                    src={work.href}
                    alt={work.alt}
                    width={200}
                    height={200}
                    className="object-cover rounded-md shadow-md"
                />
            </div>
            <div className="flex flex-col w-full space-y-4 text-white">
                <h3 className="text-2xl font-bold text-center">{work.company}</h3>
                <p className="text-sm lg:text-base text-center lg:text-left">{work.description}</p>
                <p className="text-sm lg:text-base font-semibold text-center lg:text-left">
                    Position: {work.position}
                </p>
                <p className="text-sm lg:text-base text-gray-300 text-center lg:text-left">
                    {work.date}
                </p>
                <ul className="flex flex-wrap gap-2 mt-2">
                    {work.technologies.map((tech, index) => (
                        <li
                            key={index}
                            className="bg-gray-200 px-3 py-1 rounded-full text-sm text-[#00004f]"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
