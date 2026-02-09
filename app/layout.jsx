import "./globals.css";
import { Navbar } from "./components/common/navbar";
import Footer from "./components/common/footer/footer";
import SmoothScroll from "./components/SmoothScroll";
import Loader from "./components/loader";

export const metadata = {
  title: "Zenith Studio - Creative Studio",
  description: "Only The Peak Nothing Less.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Resource hints for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Preload critical assets - update these paths after converting GIFs */}
        <link
          rel="preload"
          as="video"
          href="/hero-image.mp4"
          type="video/mp4"
        />
      </head>
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
