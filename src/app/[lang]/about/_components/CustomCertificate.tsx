import { Certification } from "@/types/certification";
import Image from "next/image";

export default function CustomCertificate({ certification }: { certification: Certification }) {
    return (
        <div
            className="flex flex-col items-center gap-4 justify-evenly"
        >
            <Image
                src={certification.href}
                alt={certification.alt}
                width={300}
                height={300}
                className="rounded-md"
            />
            <div className="flex flex-col items-center">
                <p
                    className="text-2xl text-center font-semibold"
                >
                    {certification.name}
                </p>
                <p
                    className="text-xl text-center text-gray-500"
                >
                    {certification.provider}
                </p>
            </div>
        </div>
    );
}
