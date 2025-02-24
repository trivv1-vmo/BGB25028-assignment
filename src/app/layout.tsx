import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import MainLayout from "@/layouts/MainLayout";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/providers/ThemeProvider";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "IKEA",
  description: "Shop for home furnishing solutions - IKEA Saudi - IKEA",
  keywords: ["Home", "Shop", "IKEA", "furniture", "Saudi Arabia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSans.className} antialiased`}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <MainLayout>{children}</MainLayout>
            <Toaster />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
