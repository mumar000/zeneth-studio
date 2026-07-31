import "./globals.css";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import StoreHeader from "@/components/store/store-header";
import StoreFooter from "@/components/store/store-footer";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: { default: "Aurelia — Modern Abayas", template: "%s — Aurelia" },
  description: "Refined abayas, thoughtfully made for the modern woman.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <StoreHeader />
        {children}
        <StoreFooter />
      </body>
    </html>
  );
}
