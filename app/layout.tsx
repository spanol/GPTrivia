import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Game of Thrones Quiz",
  description:
    "This application consists of a quiz about the series Game of Thrones, i'm trying to create it a way that can be scaled to something like a 'Quiz factory'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className + "w-screen bg-red-600"}>
        <Header />
        <div className="h-screen flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
