import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import jsonLd from "@/app/json-ld.json";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    alternates: {
      canonical: "https://alacrity.education",
    },
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      url: "https://www.alacrity.education",
      type: "website",
      images: [
        {
          url: "https://alacrity.education/logo.svg",
          width: 512,
          height: 512,
          alt: "Alacrity Education logo",
          type: "image/svg+xml",
        },
      ],
      siteName: t("openGraph.siteName"),
    },
    description: t("description"),
  };
}
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const ld = jsonLd[locale];

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GoogleAnalytics gaId="G-7FHYBDDCEX" />
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(ld).replace(/</g, "\\u003c"),
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
