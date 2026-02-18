import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ed3Hub",
  description: "Ed3Hub is a platform for Web3 community & courses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
        suppressHydrationWarning
      >
      
          {children}
        
      </body>
    </html>
  );
}
