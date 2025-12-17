import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DDOC|開発用ドキュメント",
  description: "開発用ドキュメントになります。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/icon.png" type="image/x-icon" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen mx-10 md:mx-20">
        {children}
      </body>
    </html>
  );
}
