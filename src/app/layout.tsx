import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SIMPL AI | Artificial Intelligence Tool for ERPs",
  description: "SIMPL AI enables organizations to improve their ability to report on the data in their business systems and ERP using artificial intelligence without touching your data. Secure. Fast. Unlimited.",
  keywords: "AI, artificial intelligence, ERP, business intelligence, data reporting, natural language processing, private AI",
  openGraph: {
    title: "SIMPL AI | Artificial Intelligence Tool for ERPs",
    description: "SIMPL AI enables organizations to improve their ability to report on the data in their business systems and ERP using artificial intelligence",
    url: "https://www.simplai.ca",
    siteName: "Simpl AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIMPL AI | Artificial Intelligence Tool for ERPs",
    description: "SIMPL AI enables organizations to improve their ability to report on the data in their business systems and ERP using artificial intelligence",
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
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
