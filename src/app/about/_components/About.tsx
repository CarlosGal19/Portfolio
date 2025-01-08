"use client"

import { AboutProps } from '@/types/about'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import CustomCertificate from './CustomCertificate'

export default function About({ about }: { about: AboutProps }) {

    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className='space-y-24 mb-8'
        >
            <AnimatePresence mode='wait'>
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75 }}
                    className='mt-20 mb-32'
                >
                    <h1
                        className="text-9xl text-center"
                    >
                        {about.title}
                    </h1>
                    <p
                        className="text-4xl font-light text-center w-4/5 mx-auto mt-20"
                    >
                        {about.description}
                    </p>
                </motion.section>
            </AnimatePresence>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            >
                <h2
                    className="text-5xl text-center my-6"
                >
                    {about.currentStack}
                </h2>
                <div
                    className='container mx-auto flex justify-center px-4'
                >
                    <Image
                        src={`https://skillicons.dev/icons?i=ts,npm,postgres,tailwind,dotnet,next&perline=${windowWidth > 768 ? 8 : 3}`}
                        alt="IT SKILLS"
                        width={windowWidth > 768 ? 1000 : 500}
                        height={200}
                    />
                </div>
            </motion.section>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            >
                <h2
                    className="text-5xl text-center my-6"
                >
                    {about.stack}
                </h2>
                <div
                    className='container mx-auto mb-12 flex justify-center px-4'
                >
                    <Image
                        src={`https://skillicons.dev/icons?i=react,js,ts,nodejs,npm,express,py,fastapi,mysql,mongodb,php,java,cs,tailwind,cpp,dotnet,next,prisma,postgres,linux&perline=${windowWidth > 768 ? 8 : 3}`}
                        alt="IT SKILLS"
                        width={windowWidth > 768 ? 1000 : 500}
                        height={200}
                    />
                </div>
            </motion.section>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            >
                <h2
                    className="text-5xl text-center my-6"
                >
                    {about.certificationsTitle}
                </h2>
                <div
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'
                >
                    {
                        about.certifications.map((certification, index) => (
                            <CustomCertificate
                                certification={certification}
                                key={index}
                            />
                        ))
                    }
                </div>
            </motion.section>
        </div>
    )
}
