import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a chai",
  description: "Fund your projects",
};

export default function RootLayout({ children }) {
  return (
    // <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 "></div></div>
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <div className="flex flex-col min-h-screen bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
            <Navbar />
            <div className="flex-grow">
              {children}
            </div>
            <div className="w-full">
              <Footer />
            </div>
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
