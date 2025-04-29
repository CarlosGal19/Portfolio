"use client";


import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomProject({ project }: { project: Project }) {

    const pathname = usePathname();

    return (
        <div className="rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-[#193272] border border-[#2563eb]">
            <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
            <p className="mb-4">{project.description}</p>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">{
                    pathname.includes("es/") ? "Tecnologías utilizadas" : "Technologies used"
                }:</h3>
                <ul className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                        <li
                            key={index}
                            className="pr-3"
                        >
                            <Image
                                src={tech}
                                alt={tech}
                                width={48}
                                height={48}
                                className="object-cover"
                            />
                        </li>
                    ))}
                </ul>
            </div>
            {project.href && (
                <div className="mb-4">
                    <h4 className="text-lg font-semibold">{
                        pathname.includes("es/") ? "Imágenes" : "Images"
                    }:</h4>
                    <div className="md:flex md:gap-2 grid grid-cols-2 gap-2 mt-2">
                        {project.href.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={project.alt || `${project.name} ${index + 1}`}
                                width={100}
                                height={100}
                                className="rounded-md"
                            />
                        ))}
                    </div>
                </div>
            )}
            {project.github && (
                <Link
                    href={project.github}
                    className="text-blue-500 hover:text-blue-600 underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {
                        pathname.includes("es/") ? "Ver en GitHub" : "View on GitHub"
                    }
                </Link>
            )}
            {!project.completed && (
                <p className="text-red-500 font-semibold mt-4">{
                    pathname.includes("es/") ? "Proyecto en desarrollo" : "Project in development"
                }</p>
            )}
        </div>
    );
}
