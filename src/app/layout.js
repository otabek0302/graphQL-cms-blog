import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/sections/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "CMS - BLOG",
  description:
    "CMS Blog - The Blog created by Amonov Otabek using GraphQL for education purposes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
