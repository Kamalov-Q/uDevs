import "./globals.css";
/* @kamalovquvomiddin  Kamalov Quvomiddin Fully ready 21.07.2024 23:17 */
/* @kamalovq Kamalov Quvomiddin Fully updated 21.12.2024 12:32 */
export const Metadata = {
  title: "Kamalov Quvomiddin Udevs",
  description: "Kamalov Quvomiddin Udevsni qilgan edim",

  keywords:
    "Kamalov, Quvomiddin, Udevs, Kamalov Quvomiddin Udevs, Kamalov Quvomiddin, Kamalov Udevs, Quvomiddin Udevs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <noscript>
          Kamalov Quvomiddin Sevarani Sevardi bir vaqtlar hozir esa yuq. Men
          qaytishga tayyorman
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
