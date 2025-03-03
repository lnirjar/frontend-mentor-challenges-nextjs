import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Attribution } from "@/components/attribution";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppinsSans = Poppins({
  weight: ["400", "600"],
  variable: "--font-poppins-sans",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Frontend Mentor Challenges",
    template: "Frontend Mentor | %s",
  },
  description: "Frontend Mentor Challenges using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppinsSans.variable} ${openSans.variable} antialiased`}
      >
        {children}
        <Attribution />
      </body>
    </html>
  );
}
