"use client"
import { ZurichCard } from '@/types/zurich'
import {  ZurichPostSite, ZurichProps } from '@/types/zurich'
import { motion, AnimatePresence } from 'framer-motion'
import CustomPost from './Post/CustomPost'
import CustomCard from './Card/CustomCard'

export default function Zurich({ zurich }: { zurich: ZurichProps }) {

    return (
        <div
            className="space-y-24 mb-8"
        >
            <AnimatePresence mode='wait'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75 }}
                >
                    <section

                        className='mt-20 mb-16'
                    >
                        <h1
                            className="md:text-7xl text-5xl text-center"
                        >
                            {zurich.title}
                        </h1>
                        <p
                            className="text-2xl font-light text-center w-4/5 mx-auto mt-20"
                        >
                            {zurich.description}
                        </p>
                    </section>
                    <section className='mb-12'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12'>
                            {zurich.cards.map((card: ZurichCard, index: number) => (
                                <CustomCard key={index} index={index} card={card} />
                            ))}
                        </div>
                    </section>
                    <section className='mb-12'>
                        <h2 className='md:text-5xl text-4xl text-center mb-12 px-12'>
                            {zurich.posts.title}
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12'>
                            {zurich.posts.sites.map((post: ZurichPostSite, index: number) => (
                                <CustomPost key={index} post={post} index={index} />
                            ))}
                        </div>
                    </section>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
