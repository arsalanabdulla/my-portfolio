import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/stairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800"]
});

export const metadata = {
  title: "Arsalan Portfolio",
  description: "Arsalan Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning
        className={`${jetbrainsMono.className} antialiased bg-primary text-white leading-loose`}
      >
        <Header/>
        <StairTransition/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
