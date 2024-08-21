import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "BMI Calculator - Accurately Measure Your Body Mass Index",
  description:
    "Easily calculate your Body Mass Index (BMI) with our intuitive BMI calculator. Get insights on your health and wellness from the comfort of your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
