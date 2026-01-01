import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KitchenFlow - Restaurant Management SaaS",
  description: "Complete restaurant and kitchen management solution with order management, inventory tracking, staff scheduling, and analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
