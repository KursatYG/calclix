import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Calclix | Hesaplama ve Dönüştürme Aracı | KursatYG",
  description:
    "İndirim, Vücut Kütle İndeksi (VKİ), Para Birimi, Uzunluk, Kütle, Hacim ve Tarih hesaplama araçları. Mobil uyumlu, ve hızlı! Şimdi hesapla.",
    keywords: "hesap makinesi, indirim hesaplama, vücut kütle indeksi, para birimi dönüştürücü, birim dönüştürücü, hesaplama aracı, hızlı", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Calclix",
              url: "https://calclix.vercel.app/",
              description:
                "İndirim, Vücut Kütle İndeksi, para birimi, uzunluk, kütle, hacim ve tarih hesaplama araçları.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://calclix.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>
      <body className="bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] max-w-[1440px] m-auto px-4 sm:px-8">
        <nav><Navbar /></nav>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
          <aside className="mb-8" aria-label="Hesaplama Araçları Menüsü">
            <Sidebar />
          </aside>
          <main className="flex justify-center items-start">{children}</main>
        </div>
        <footer>
          {" "}
          <Footer />
        </footer>
        <Analytics/>
      </body>
    </html>
  );
}
