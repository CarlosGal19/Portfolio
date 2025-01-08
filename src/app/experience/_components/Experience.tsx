"use client"

import { ExperienceProps } from "@/types/experience";
import { AnimatePresence, motion } from "framer-motion";
import CustomExperience from "./CustomExperience";
import CustomWork from "./CustomWork";

export default function Experience({ experience }: { experience: ExperienceProps }) {
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
                            className="md:text-9xl text-7xl text-center"
                        >
                            {experience.title}
                        </h1>
                        <p
                            className="text-4xl font-light text-center w-4/5 mx-auto mt-20"
                        >
                            {experience.description}
                        </p>
                    </section>
                    <section
                        className='mb-20'
                    >
                        <h2
                            className="text-7xl text-center"
                        >
                            {experience.workTitle}
                        </h2>
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-5/6 container mx-auto mt-12"
                        >
                            {
                                experience.workExperience.map((work, index) => (
                                    <CustomWork
                                        key={index}
                                        work={work}
                                    />
                                ))
                            }
                        </div>
                    </section>
                    <section
                    >
                        <h2
                            className="text-7xl text-center"
                        >
                            {experience.studiesTitle}
                        </h2>
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-5/6 container mx-auto mt-12"
                        >
                            {
                                experience.studies.map((study, index) => (
                                    <CustomExperience
                                        key={index}
                                        study={study}
                                    />
                                ))
                            }
                        </div>
                    </section>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
