"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function FeaturedPost() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm"
    >
      <div className="absolute top-4 right-4">
        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">
          置顶
        </Badge>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">2024年五大加密货币交易所</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            <span>2024年6月10日</span>
            <span className="mx-2">•</span>
            <Clock className="mr-1 h-4 w-4" />
            <span>阅读时间：5分钟</span>
          </div>
        </div>

        <p className="text-muted-foreground">
          探索2024年最佳加密货币交易所，比较手续费、功能、安全性和用户体验。
          了解哪些平台提供最佳推荐计划以及如何最大化您的收益。
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">加密货币</Badge>
          <Badge variant="outline">交易所</Badge>
          <Badge variant="outline">交易</Badge>
          <Badge variant="outline">返佣</Badge>
        </div>

        <Button asChild variant="outline" className="w-fit">
          <Link href="/blog/top-exchanges-2024">
            阅读全文
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}

