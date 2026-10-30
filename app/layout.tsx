import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lahiru Jayarathne | Software Engineer",
  description:
    "Portfolio of Lahiru Jayarathne, a full-stack Software Engineer working with .NET, Spring Boot, React, Next.js and Angular.",
  openGraph: {
    title: "Lahiru Jayarathne | Software Engineer",
    description:
      "Full-stack Software Engineer working with .NET, Spring Boot, React, Next.js and Angular.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <div className=" bg-black">
        {children}
        </div>
        
      </body>
    </html>
  );
}
