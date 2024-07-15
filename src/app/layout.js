/* eslint-disable @next/next/no-sync-scripts */
import { Inter } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
