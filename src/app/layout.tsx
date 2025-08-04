import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alacrity Education: Open-Source STEAM for a Sustainable Future",
  alternates: {
    canonical: "https://alacrity.education",
  },
  description:
    "We are building Romania’s first open-source education lab. From AirBox to environmental innovation, Alacrity empowers students and educators through hands-on, high-impact STEAM learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "http://alacrity.education/",
    "@type": "Person",
    name: "Alacrity Education",
    jobTitle: "Education NGO",
    //telephone: "(425) 123-4567",
    url: "http://blog.alacrity.education",
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GoogleAnalytics gaId="G-7FHYBDDCEX" />
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
