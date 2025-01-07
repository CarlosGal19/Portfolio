"use client"

import { ProjectsProps } from "@/types/projects";
import { motion, AnimatePresence } from "framer-motion";
import CustomProject from "./CustonProject";

export default function Projects({ projects }: { projects: ProjectsProps }) {

    return (
        <div
            className='space-y-24 mb-8'
        >
            <AnimatePresence mode='wait'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75 }}
                >
                    <section

                        className='mt-20 mb-32'
                    >
                        <h1
                            className="md:text-9xl text-8xl text-center"
                        >
                            {projects.title}
                        </h1>
                        <p
                            className="text-4xl font-light text-center w-4/5 mx-auto mt-20"
                        >
                            {projects.description}
                        </p>
                    </section>
                    <section

                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12'
                    >
                        {
                            projects.projects.map((project, index) => (
                                <CustomProject
                                    key={index}
                                    project={project}
                                />
                            ))
                        }
                    </section>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
