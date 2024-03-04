import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./appStore/store";
import ReduxProvider from "./appStore/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tridev Hydraulics",
  description: "Tridev Hydraulics a new way to Engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>{children}</body>
      </ReduxProvider>
    </html>
  );
}
