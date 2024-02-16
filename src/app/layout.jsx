import {Inter} from "next/font/google";
import "./globals.css";
import {Dev} from "../lib/dev";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: Dev.Name,
    description: Dev.Bio,
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
