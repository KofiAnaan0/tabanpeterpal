import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/HomePage/Footer";
import ClientWrapper from "@/components/ClientWrapper";
import Phone from "@/components/Phone/Phone";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Taban Peter Pal",
    absolute: "Taban Peter Pal",
  },
  description:
    "Creative Entrepreneur and Multi-Award-Winning Artist based in Kampala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${poppins.className} antialiased bg-[#FCFAEE]`}>
        <ClientWrapper>
          {children}
          <Phone />
        </ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
