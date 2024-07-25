import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wagtail sustainable site",
  description: "A sustainable site using headless wagtail and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
