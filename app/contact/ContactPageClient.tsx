"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Mail, MessageSquare, Send } from "lucide-react"
import Link from "next/link"
import SeoSchema from "@/components/seo-schema"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 模拟表单提交
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "消息已发送！",
      description: "我们会尽快回复您。",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <SeoSchema />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">联系我们</h1>
          <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
            对加密货币交易所或推荐计划有疑问？我们随时为您提供帮助！
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">给我们发送消息</CardTitle>
              <CardDescription>填写下面的表单，我们会尽快回复您。</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="您的姓名"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">电子邮件</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="您的电子邮件地址"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">主题</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="这是关于什么的？"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">消息</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="您的消息"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>处理中...</>
                  ) : (
                    <>
                      发送消息
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">联系信息</CardTitle>
              <CardDescription>您也可以通过以下渠道联系我们。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">电子邮件</h3>
                  <p className="text-muted-foreground">support@cryptoref.example.com</p>
                  <p className="text-sm text-muted-foreground mt-1">我们通常在24小时内回复。</p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageSquare className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">在线聊天</h3>
                  <p className="text-muted-foreground">周一至周五可用</p>
                  <p className="text-sm text-muted-foreground mt-1">上午9:00 - 下午5:00（UTC）</p>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-6 mt-6">
                <h3 className="font-medium mb-2">常见问题</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      推荐计划如何运作？
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      使用您的推荐链接是否有任何费用？
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      推荐奖励需要多长时间才能显示？
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      我可以使用多个推荐链接吗？
                    </Link>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

