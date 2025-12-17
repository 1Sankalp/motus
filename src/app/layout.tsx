import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Motus — Real-Time Back Pain Relief at Your Desk",
  description:
    "Motus is your always-available desktop companion for instant back pain relief. Pinpoint your pain on a 3D body model and get personalized stretches, cognitive calming, and proactive nudges — all without leaving your desk.",
  keywords: [
    "back pain relief",
    "desk exercises",
    "workplace wellness",
    "ergonomic",
    "stretches",
    "posture",
    "employee wellness",
  ],
  openGraph: {
    title: "Motus — Real-Time Back Pain Relief at Your Desk",
    description:
      "Your always-available desktop companion for instant back pain relief during work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
