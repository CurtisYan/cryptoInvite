"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      containerRef.current.style.setProperty("--x", `${x * 20}px`)
      containerRef.current.style.setProperty("--y", `${y * 20}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-20 md:py-32 lg:py-40"
      style={
        {
          "--x": "0px",
          "--y": "0px",
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20" />
      <div
        className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"
        style={{
          backgroundSize: "30px 30px",
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)",
          transform: "translate(var(--x), var(--y))",
        }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            最大化您的加密交易收益
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            通过我们的推荐链接加入顶级加密货币交易所，获取独家奖励、手续费折扣和返佣。
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg">
              <Link href="/download">
                立即开始
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/tutorials">了解更多</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

