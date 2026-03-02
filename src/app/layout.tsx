import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"], // Bold Serif
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veer Modi | Portfolio",
  description: "Aspiring Full Stack Developer | UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
