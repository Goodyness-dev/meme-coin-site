import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";




export const metadata: Metadata = {
  title: "Timmy Turner MemeCoin",
  description: "Welcome to Timmy Turner’s MemeCoin community 🚀✨",
  keywords: ["crypto", "meme coin", "Timmy Turner", "tokenomics", "web3"],
  authors: [{ name: "Timmy Turner Devs" }],
  openGraph: {
    title: "Timmy Turner MemeCoin",
    description: "Wish-granting community coin with Cosmo & Wanda 🪄💸",
    images: ["/pablo'simage2.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timmy Turner MemeCoin",
    description: "Join Timmy Turner’s crypto wish community 🚀✨",
    images: ["/pablo'simage2.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



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
