"use client";

import { MainProps } from '@/types/main';
import { motion, AnimatePresence } from 'framer-motion';

export default function Main({main}: { main: MainProps }) {
    return (
        <AnimatePresence mode='wait'>
            <motion.div className="w-full h-full grid grid-cols-1 md:grid-cols-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75 }}
            >
                <section
                    className="w-full flex flex-col justify-center items-center space-y-12 md:mt-32 mt-12 mb-20 md:mb-0"
                >
                    <h1
                        className="text-8xl text-center"
                    >
                        {main.title}
                    </h1>
                    <h2
                        className="text-4xl text-center"
                    >
                        {main.subtitle}
                    </h2>
                </section>
                <section
                    className="w-full flex justify-center items-center md:mt-32 mt-0"
                >
                    <div
                        className="text-2xl text-center w-4/5 md:mb-0 mb-24"
                    >
                        {main.description}
                    </div>
                </section>
            </motion.div>
        </AnimatePresence>
    )
}
