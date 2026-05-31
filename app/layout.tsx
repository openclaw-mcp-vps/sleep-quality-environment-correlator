import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SleepSync — Find What Affects Your Sleep",
  description: "Correlate sleep tracking data with environmental factors like temperature, humidity, noise, and light to identify what impacts your sleep quality."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="02fac576-e5a6-44ff-a835-01b54540b823"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
