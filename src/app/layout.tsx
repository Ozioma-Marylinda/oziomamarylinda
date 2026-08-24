import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layouts/Header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OML",
    template: "%s | OML_Planet",
  },
  description: "Where Creativity Meets Technology",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        
      </body>
    </html>
  );
}