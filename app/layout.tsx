import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const oranienbaum = localFont({
  src: [
    {
      path: "./fonts/Oranienbaum-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-oranienbaum",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Euzam Consulting Zambia - Luxury Real Estate Experts | EUZAM Consulting Zambia",
  description:
    "Euzam Consulting Zambia specializes in luxury and destination tourism real estate, agribusiness, and management consulting. We shape tomorrow's luxury living in Zambia and beyond.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={oranienbaum.variable}>
      <body
        style={{ fontFamily: "var(--font-oranienbaum), serif" }}
        className="antialiased bg-white text-gray-900"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

