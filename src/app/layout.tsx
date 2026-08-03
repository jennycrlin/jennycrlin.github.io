import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ChatBubble } from "@/components/ChatBubble";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Jenny Lin — UX Research Designer",
  description:
    "UX Research Designer with 5+ years crafting accessible, human-centered experiences across B2B, healthcare, and AI platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
          <ChatBubble />
        </ThemeProvider>
      </body>
    </html>
  );
}
