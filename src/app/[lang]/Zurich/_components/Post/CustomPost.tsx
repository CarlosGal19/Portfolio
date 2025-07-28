import { ZurichPostSite } from "@/types/zurich";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomPost({ post, index }: { post: ZurichPostSite, index: number }) {
    const pathname = usePathname();

    return (
        <div
            key={index}
            className="flex flex-col justify-between rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-[#193272] border border-[#2563eb] min-h-[450px]"
        >
            <div className="mb-4 w-full aspect-[16/10] relative rounded-md overflow-hidden">
                <Image
                    src={post.img}
                    alt={post.alt}
                    fill
                    className="object-contain"
                />
            </div>

            <div className="flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
                <p className="text-md text-gray-300">{post.individual}</p>

                <div className="mt-auto">
                    <Link
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline text-sm"
                    >
                        {pathname.includes("es/") ? "Ver el post →" : "View the post →"}
                    </Link>
                </div>
            </div>
        </div>
    );
}
