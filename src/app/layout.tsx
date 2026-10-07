import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rahul Hazarika - Builder Archive",
  description: "Personal builder archive of software, games, and experiments.",
  openGraph: {
    title: "Rahul Hazarika - Builder Archive",
    description: "Personal builder archive of software, games, and experiments.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Hazarika - Builder Archive",
    description: "Personal builder archive of software, games, and experiments.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen bg-[#131316] text-[#e1e1e6] flex flex-col justify-between font-mono">
        {children}
      </body>
    </html>
  );
}
