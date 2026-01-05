import type { Metadata } from "next";
import "./globals.css";
import FluentUIProvider from "@/components/FluentUIProvider";
import LayoutContent from "@/components/LayoutContent";

export const metadata: Metadata = {
  title: "DataBalk KlantHub",
  description: "Next.js App Router Starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <FluentUIProvider>
          <LayoutContent>
            {children}
          </LayoutContent>
        </FluentUIProvider>
      </body>
    </html>
  );
}
