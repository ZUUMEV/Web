import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

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
  metadataBase: new URL('https://zuum.co.in'),
  title: "ZUUM Electric — EV Scooter Rentals for Delivery Partners | Earn ₹30k–₹45k/Month",
  description:
    "Join ZUUM — India's premium EV rental platform for delivery partners. Get Bike + Fuel + Helmet. Earn ₹30,000 to ₹45,000/month. Zero fuel cost, zero maintenance. Plans from ₹300/day.",
  keywords: [
    "ZUUM",
    "ZUUM Electric",
    "EV rental",
    "electric scooter rental",
    "electric scooter",
    "delivery partner jobs",
    "Swiggy Zomato Zepto delivery",
    "Haldwani Rudrapur jobs",
    "EV bike rental India",
    "delivery partner bike",
    "zero emission mobility",
    "electric vehicle rental Uttarakhand",
    "bike on rent for delivery",
    "earn with EV scooter",
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
    title: "ZUUM Electric — EV Scooter Rentals for Delivery Partners",
    description:
      "Get Bike + Fuel + Helmet. Earn ₹30k–₹45k/month. Zero fuel, zero maintenance. Plans from ₹300/day.",
    url: "https://zuum.co.in",
    siteName: "ZUUM Electric",
    type: "website",
    locale: "en_IN", // P0 fix: hi_IN → en_IN (page content English hai)
    images: [
      {
        url: "/og-image.png", // metadataBase se https://zuum.co.in/og-image.png ban jata hai
        width: 1200,
        height: 630,
        alt: "ZUUM Electric — EV Scooter Rentals for Delivery Partners. Earn ₹30k–₹45k/month.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZUUM Electric — EV Rentals for Delivery Partners",
    description:
      "Bike + Fuel + Helmet. Earn ₹30k–₹45k/month. Zero fuel, zero maintenance.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://zuum.co.in",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
