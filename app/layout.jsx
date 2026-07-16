import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { Navbar } from "./components/common/navbar";
import Footer from "./components/common/footer/footer";
import SmoothScroll from "./components/SmoothScroll";
import Loader from "./components/loader";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Zenith Studio - Creative Studio",
  description: "Only The Peak Nothing Less.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className={`antialiased`}>
        <SmoothScroll>
          <Loader />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
