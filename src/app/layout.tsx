import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "min-h-screen font-sans antialiased grainy",
          inter.className
        )}
      >
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">{/* <SideNav /> */}</div>
          <MaxWidthWrapper className="flex-grow p-1 md:overflow-y-auto md:p-2">
            <div className="flex justify-end mr-2 gap-x-6 mt-2">
              <div>moon</div>
              <div>camp</div>
              <div className="bg-zinc-700 rounded-full h-8 w-8"></div>
            </div>
            {children}
          </MaxWidthWrapper>
        </div>
      </body>
    </html>
  );
}
