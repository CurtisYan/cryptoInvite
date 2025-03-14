import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Sidebar from "@/components/sidebar"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "江南专属 - 加密货币交易所下载及返佣网站",
  description: "通过我们的推荐链接加入顶级加密货币交易所，获取独家奖励和返佣。",
  keywords: "加密货币,返佣,币安返佣,欧易返佣,Bybit返佣,Bitget返佣,Gate.io返佣",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="baidu-site-verification" content="code-yourverificationcode" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
              <Sidebar />
              <main className="relative py-6 lg:gap-10 lg:py-8">{children}</main>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'