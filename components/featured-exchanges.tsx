"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllExchanges } from "@/lib/exchanges"

// 使用统一的数据源获取所有交易所
const exchanges = getAllExchanges()

export default function FeaturedExchanges() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {exchanges.map((exchange, index) => (
        <motion.div
          key={exchange.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <Image
                  src={exchange.image || "/placeholder.svg"}
                  alt={exchange.name}
                  width={160}
                  height={80}
                  className="h-10 w-auto object-contain"
                />
                <div className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {exchange.benefits}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <CardTitle className="text-xl mb-2">{exchange.name}</CardTitle>
              <CardDescription>{exchange.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={exchange.referralLink} target="_blank" rel="noopener noreferrer">
                  {exchange.buttonText}
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

