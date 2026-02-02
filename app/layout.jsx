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
