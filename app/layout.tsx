import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "User Dashboard",
  description:
    "A modern dashboard for viewing and managing user information, activity, and insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
