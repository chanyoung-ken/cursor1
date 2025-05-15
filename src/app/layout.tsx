import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // 전역 스타일 시트

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "오늘 뭐 먹지? AI",
  description: "결정장애 미식가를 위한 AI 랜덤슐랭 가이드!",
  // 추가적인 메타 태그 (예: viewport, icons 등)를 여기에 추가할 수 있습니다.
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: "/favicon.ico", // public 폴더에 favicon.ico가 있다고 가정
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
        {children}
      </body>
    </html>
  );
} 