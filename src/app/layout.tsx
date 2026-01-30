import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "AI MSP Landing",
  description: "AI + MSP growth speeches and packages.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${jakarta.variable} ${manrope.variable} bg-slate-950 text-white font-[var(--font-jakarta)]`}
      >
        {children}
      </body>
    </html>
  );
}
