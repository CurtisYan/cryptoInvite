"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BookOpen, Compass, Download, FileText, ListPlus, Mail, TrendingUp } from "lucide-react"

const exchanges = [
  { title: "币安", href: "/tutorials/binance-guide", image: "/Binance.png" },
  { title: "欧易", href: "/tutorials/okx-guide", image: "/OKX.png" },
  { title: "Bybit", href: "/tutorials/bybit-guide", image: "/Bybit.png" },
  { title: "Bitget", href: "/tutorials/bitget-guide", image: "/Bitget.png" },
  { title: "Gate.io", href: "/tutorials/gate-guide", image: "/Gate.png" },
]

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <div className="h-full py-6 pr-6 lg:py-8">
        <div className="space-y-4">
          <div className="py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight flex items-center">
              <Compass className="mr-2 h-5 w-5 text-primary" />
              导航
            </h2>
            <div className="space-y-1">
              <Link
                href="/download"
                className={cn(
                  "flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                  isActive("/download") ? "bg-muted" : "transparent",
                )}
              >
                <Download className="mr-2 h-4 w-4" />
                下载
              </Link>
              <Link
                href="/tutorials"
                className={cn(
                  "flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                  isActive("/tutorials") ? "bg-muted" : "transparent",
                )}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                教程
              </Link>
              <Link
                href="/blog"
                className={cn(
                  "flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                  isActive("/blog") ? "bg-muted" : "transparent",
                )}
              >
                <FileText className="mr-2 h-4 w-4" />
                博客
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                  isActive("/contact") ? "bg-muted" : "transparent",
                )}
              >
                <Mail className="mr-2 h-4 w-4" />
                联系我
              </Link>
            </div>
          </div>

          <div className="py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-primary" />
              热门交易所
            </h2>
            <div className="space-y-1">
              {exchanges.map((exchange, index) => (
                <Link
                  key={exchange.href}
                  href={exchange.href}
                  className={cn(
                    "flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                    isActive(exchange.href) ? "bg-muted" : "transparent",
                    index === 0 ? "text-primary font-bold" : "",
                  )}
                >
                  <Image
                    src={exchange.image}
                    alt={exchange.title}
                    width={16}
                    height={16}
                    className="mr-2 h-4 w-4 object-contain rounded-sm"
                  />
                  {exchange.title}
                </Link>
              ))}
              <Link
                href="/tutorials"
                className={cn(
                  "flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-muted",
                  pathname === "/tutorials" ? "bg-muted" : "transparent",
                )}
              >
                <ListPlus className="mr-2 h-4 w-4" />
                查看全部
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

