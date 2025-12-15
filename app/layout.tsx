import type { Metadata } from "next";
import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";
import { ptSansNarrow } from '@/app/ui/fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Clinique Espoir",
  description: "Nous prenons soin de votre santé mentale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${ptSansNarrow.className} $ antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
