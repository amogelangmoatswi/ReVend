import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { Layout } from "@/components/craft";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReVend",
  description: "We are at the forefront of the recycling revolution, offering state-of-the-art vending machines that turn waste into value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


<Layout className={inter.className}>
<body className="px-4 xl:px-0">
    <NavBar/>
    {children}
</body>
</Layout>
  );
}
