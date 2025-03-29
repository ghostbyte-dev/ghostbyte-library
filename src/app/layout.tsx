import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Links from "../components/Links";

const rubikLight = Rubik({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const rubikMedium = Rubik({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

const rubikBold = Rubik({
  subsets: ["latin"],
  weight: "900",
  display: "swap",
});

export const metadata = {
  title: "Ghostbyte Library",
  description: "Categorized collections of useful websites and tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${rubikLight.className} antialiased min-h-screen bg-gray-900`}
      >
        <Navbar />

        <div className="w-full">
          <div className="flex flex-row m-0 pt-[45px] md:pt-0 h-screen">
            <div className=" p-0 hidden md:block w-64 fixed h-full">
              <div className="p-3 h-full overflow-scroll bg-gray-800">
                <Links />
              </div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
