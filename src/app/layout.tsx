import NavBar from "@/components/layout/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import quadratDemiboldFont from "@next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const quadrat = quadratDemiboldFont({
  src: [
    {
      path: "../../public/fonts/Quadrat-DemiBold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-quadrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${quadrat.variable} font-sans`}>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
