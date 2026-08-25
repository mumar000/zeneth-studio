import "./globals.css";
import { Navbar } from "./components/common/navbar";
import Footer from "./components/common/footer/footer";
import SmoothScroll from "./components/SmoothScroll";
import Loader from "./components/loader";
import FloatingCTA from "@/components/works/detail/floating-cta";
import JsonLd from "@/components/seo/json-ld";
import { createPageMetadata, organizationSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const homeMetadata = createPageMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  path: "/",
  eyebrow: "Brand identity · Interface design · Web development",
  imageAlt: "Nymbor — brand identity, web design, and development studio",
  absoluteTitle: true,
});

export const metadata = {
  ...homeMetadata,
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: "%s | Nymbor",
  },
  description: siteConfig.defaultDescription,
  applicationName: "Nymbor",
  authors: [{ name: "Nymbor" }],
  creator: "Nymbor",
  publisher: "Nymbor",
  category: "design",
  keywords: [
    "brand identity studio",
    "interface design studio",
    "web design studio",
    "web development studio",
    "creative studio",
  ],
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: "Nymbor",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "256x256" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.themeColor },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[999] -translate-y-24 rounded-lg bg-black px-4 py-3 text-sm font-[700] text-white shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <JsonLd data={organizationSchema()} />
        <SmoothScroll>
          <Loader />
          <Navbar />
          {children}
          <Footer />
          <FloatingCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
