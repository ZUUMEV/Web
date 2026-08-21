import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zuum.co.in"),
  title: "Zuum Electric - Delivery Partner Job Earn ₹35,000+/Month",
  description:
    "Free bike, fuel & helmet with Zuum Electric! Earn ₹35,000+/month as a delivery partner in Uttarakhand. Daily/weekly/monthly EV rentals. Apply now!",
  keywords: [
    "Zuum rental service",
    "delivery job",
    "bike rent",
    "scooty rent",
    "Zomato delivery job",
    "Swiggy delivery job",
    "gig job Uttarakhand",
    "delivery job Uttarakhand",
    "Haldwani bike rent",
    "Rudrapur bike rent",
    "EV rental service",
  ],
  authors: [{ name: "ZUUM Electric" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Zuum Electric - Delivery Partner Job Earn ₹35,000+/Month",
    description:
      "Free bike, fuel & helmet with Zuum Electric! Earn ₹35,000+/month as a delivery partner in Uttarakhand. Daily/weekly/monthly EV rentals. Apply now!",
    url: "https://zuum.co.in/",
    siteName: "Zuum Electric",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zuum Electric - Delivery Partner Job Earn ₹35,000+/Month",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuum Electric - Delivery Partner Job Earn ₹35,000+/Month",
    description:
      "Free bike, fuel & helmet with Zuum Electric! Earn ₹35,000+/month as a delivery partner in Uttarakhand. Daily/weekly/monthly EV rentals. Apply now!",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://zuum.co.in/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <GoogleAnalytics gaId="G-SP89GN5NF0" />
        </ThemeProvider>
      </body>
    </html>
  );
}
