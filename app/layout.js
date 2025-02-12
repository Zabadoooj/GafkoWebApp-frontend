import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { TelegramWebApps } from 'telegram-webapps-types';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GafkoWEB 0.0.0a",
  description: "Biggest misstake of all Earth",

  name: "viewport",
  content: "width=device-width, initial-scale=1",
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="/icon.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
