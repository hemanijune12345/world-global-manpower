import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import { LanguageProvider } from "./components/LanguageContext";

export const metadata: Metadata = {
  title: "World Global Manpower Pvt. Ltd. | Jobs in Russia & MBBS in Russia",

  description:
    "World Global Manpower Pvt. Ltd. connects Indian professionals with employment opportunities in Russia and assists Indian students with MBBS education opportunities in Russia.",

  keywords: [
    "jobs in Russia",
    "Russia jobs from India",
    "Indian workers Russia",
    "MBBS in Russia",
    "World Global Manpower",
    "manpower consultancy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <LanguageProvider>
          <Header />

          <main className="pt-[82px]">{children}</main>

          <Footer />

          <FloatingButtons />
        </LanguageProvider>
      </body>
    </html>
  );
}