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
  title: "ZUUM Electric — EV Scooter Rentals for Delivery Partners | Earn ₹30k–₹45k/Month",
  description:
    "Join ZUUM — India's premium EV rental platform for delivery partners. Get Bike + Fuel + Helmet. Earn ₹30,000 to ₹45,000/month. Zero fuel cost, zero maintenance. Plans from ₹300/day.",
  keywords: [
    "ZUUM",
    "EV rental",
    "electric scooter",
    "delivery partner jobs",
    "Swiggy Zomato Zepto delivery",
    "Haldwani Rudrapur jobs",
    "EV bike rental India",
    "delivery partner bike",
  ],
  authors: [{ name: "ZUUM Electric" }],
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
  },
  twitter: {
    card: "summary_large_image",
    title: "ZUUM Electric — EV Rentals for Delivery Partners",
    description:
      "Bike + Fuel + Helmet. Earn ₹30k–₹45k/month. Zero fuel, zero maintenance.",
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
