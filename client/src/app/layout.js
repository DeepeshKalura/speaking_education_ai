import { Inter } from "next/font/google";
import "./globals.css";
import { DataProvider } from "@/contexts/DataContext";
import AlertWrapper from "@/components/AlertWrapper";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          <Loader />
          <AlertWrapper />
          {children}
        </DataProvider>
      </body>
    </html>
  );
}