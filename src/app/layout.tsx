import type { Metadata } from "next";
import league_spartan from "./fonts/fonts";
import "./globals.css";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: "Carlos Galindo Portfolio",
  description: "Carlos Galindo Portfolio developed with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${league_spartan.className} antialiased`}
      >
        <div
            className="md:w-screen md:h-screen bg-universe_image_mobile bg-repeat-y md:bg-universe_image md:bg-cover md:bg-center overflow-x-hidden overflow-y-visible"
        >
            <Header />
            <main className="w-auto flex justify-center items-center">
                {children}
            </main>
        </div>
      </body>
    </html>
  );
}
