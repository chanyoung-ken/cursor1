import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // 전역 스타일 시트
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/ui/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "오늘 뭐 먹지? AI",
  description: "결정장애 미식가를 위한 AI 랜덤슐랭 가이드!",
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        {children}
        <Toaster />
      </body>
    </html>
  );
} 