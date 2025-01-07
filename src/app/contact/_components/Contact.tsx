"use client"

import { ContactProps, SocialNetwork } from "@/types/contact";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Contact({ contact }: { contact: ContactProps }) {

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

                        className='mt-20 mb-32'
                    >
                        <h1
                            className="md:text-9xl text-7xl text-center"
                        >
                            {contact.title}
                        </h1>
                        <p
                            className="text-4xl font-light text-center w-4/5 mx-auto mt-20"
                        >
                            {contact.description}
                        </p>
                    </section>
                    <section>
                        <h2
                            className="text-7xl text-center"
                        >
                            {contact.contactTitle}
                        </h2>

                        <ul
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-5/6 container mx-auto mt-12"
                        >
                            {
                                contact.socialNetworks.map((social, index) => (
                                    <CustomSocial
                                        key={index}
                                        social={social}
                                    />
                                ))
                            }
                        </ul>
                    </section>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

function CustomSocial({ social }: { social: SocialNetwork }) {
    return (
        <li
            className="flex items-center justify-center bg-[#00004f] shadow-lg p-4 rounded-lg"
        >
            <Link
                href={social.name === 'Email' ? `mailto:${social.username}` : social.href}
                target="_blank"
                rel="noreferrer"
                className="flex justify-evenly items-center space-x-4"
            >
                <Image
                    src={social.icon}
                    alt={`${social.name} image`}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                />
                <p>
                    {social.username}
                </p>
            </Link>
        </li>
    )
}
