"use client"

import type React from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">联系我</h1>
        <p className="text-muted-foreground">如果您对本网站感兴趣或有任何问题，请通过以下方式联系我</p>
      </div>

      <Card className="border-2 border-primary">
        <CardHeader>
          <CardTitle className="text-xl">网站出售详情</CardTitle>
          <CardDescription>此静态网站可出售，价格优惠</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-bold mb-2">网站特点</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>完整的加密货币交易所推广网站</li>
              <li>响应式设计，适配各种设备</li>
              <li>优化的SEO结构</li>
              <li>易于维护和更新</li>
              <li>包含教程和博客系统</li>
              <li>可自定义推广链接和返佣比例</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-primary" />
              <span>邮箱：realthat@foxmail.com</span>
            </div>

            <div className="flex items-center">
              <MessageCircle className="mr-2 h-5 w-5 text-primary" />
              <span>微信：realthat</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            请注明您是从网站看到的信息，我会尽快回复您。价格可议，可提供技术支持和部署服务。
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

