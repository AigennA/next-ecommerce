import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { WixClientContextProvider } from "@/context/wixContext"; // Ensure you import this correctly
import Banner from "@/components/banner";
import Link from "next/link"; // Use Next.js's Link component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lammazon E-Commerce App",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
          <Banner />
          <Navbar />
          {children}

          <div className="fixed bottom-4 right-4">
            <Link
              href="/contact"
              className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Contact Us
            </Link>
          </div>
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
