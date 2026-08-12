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
  metadataBase: new URL("https://nymbor.com"),
  title: {
    default: "Nymbor | Creative Studio",
    template: "%s | Nymbor",
  },
  description:
    "Nymbor builds distinctive brand identities, high-converting interfaces, and production-ready digital experiences.",
  applicationName: "Nymbor",
  authors: [{ name: "Nymbor" }],
  creator: "Nymbor",
  publisher: "Nymbor",
  openGraph: {
    type: "website",
    siteName: "Nymbor",
    title: "Nymbor | Creative Studio",
    description:
      "Distinctive brand identities, high-converting interfaces, and production-ready digital experiences.",
  },
  twitter: {
    card: "summary",
    title: "Nymbor | Creative Studio",
    description:
      "Distinctive brand identities, high-converting interfaces, and production-ready digital experiences.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
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
