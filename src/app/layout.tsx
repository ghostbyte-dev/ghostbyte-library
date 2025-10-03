import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Links from "../components/Links";
import PlausibleProvider from "next-plausible";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ghostbyte Library",
  description: "Categorized collections of useful websites and tools",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-[#040217] scroll-smooth selection:bg-blue-900 selection:text-white"
    >
      <body className={`${inter.className} antialiased min-h-screen `}>
        <PlausibleProvider
          domain="library.ghostbyte.dev"
          selfHosted
          trackOutboundLinks
          hash
        >
          <Navbar />

          <div className="w-full">
            <div className="flex flex-row m-0 pt-[45px] md:pt-0 h-screen">
              <div className=" p-0 hidden md:block w-64 fixed h-full">
                <div className="p-3 h-full overflow-scroll bg-[#030014]/60 border-r border-white/10 backdrop-blur-xl">
                  <Links />
                </div>
              </div>
              {children}
            </div>
          </div>
        </PlausibleProvider>
      </body>
    </html>
  );
}
