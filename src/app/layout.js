// imports
import "./globals.css";
import "./reset.css";
import "./locomotive-scroll.css";
import Layout from "@/components/Layout/Layout";
import { lato, secularOne } from "@/fonts";

export const metadata = {
  title: "Newcomer Navigator",
  description: "Newcomer Navigator",
};

// RootLayout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${secularOne.variable} ${lato.className}`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
