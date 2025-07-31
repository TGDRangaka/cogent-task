import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saudi Arabia's Financial Crime",
  description: "A comprehensive overview of financial crime in Saudi Arabia, including money laundering, fraud, and regulatory measures.",
  keywords: [
    "Saudi Arabia",
    "Financial Crime",
    "Money Laundering",
    "Fraud",
    "Regulatory Measures",
    "AML",
    "Compliance",
    "Financial Compliance",
    "Vision 2030",
    "Financial Institutions",
    "AML Technologies",
    "Financial Crime Compliance",
    "Financial Crime Roundtable",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
