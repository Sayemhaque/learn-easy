import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "শিখন - বাংলা প্রোগ্রামিং ও মেশিন লার্নিং প্ল্যাটফর্ম",
  description:
    "বিনামূল্যে বাংলায় শিখুন মেশিন লার্নিং এবং জাভাস্ক্রিপ্ট - সহজ ভাষায়, ধাপে ধাপে",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='bn'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
