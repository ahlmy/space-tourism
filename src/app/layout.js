import "./globals.css";
import { Nanum_Myeongjo } from "next/font/google";
import { Navbar } from "@/components";

const mulish = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata = {
  title: "Space Tourism | Home",
  description: "Looking for space tourism!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
