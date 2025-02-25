import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import MainLayout from "@/layouts/MainLayout";
import { ThemeProvider } from "@/providers/ThemeProvider";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Code Challenge",
  description: "Code Challenge Shop",
  keywords: ["Home", "Shop", "Code Challenge"],
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
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
