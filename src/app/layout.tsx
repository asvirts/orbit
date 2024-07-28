import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"

export const metadata: Metadata = {
  title: "Orbit",
  description: "Privacy-respecting Facebook alternative",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto p-2">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
