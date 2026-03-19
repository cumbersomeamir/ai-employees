import { Inter, Sora } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: {
    default: "ai-employees",
    template: "%s | ai-employees",
  },
  description:
    "Hire role-based AI employees for support, sales, content, operations, analytics, and growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sora.variable} bg-[var(--color-bg)] text-[color:var(--color-text-primary)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
