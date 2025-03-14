import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download } from "lucide-react"
import { notFound } from "next/navigation"
import { getExchangeById } from "@/lib/exchanges"

// 交易所注册指南模板
const getInstructions = (name: string, buttonText: string) => `
  # ${name}注册指南

  1. 点击下方的"${buttonText}"按钮
  2. 输入您的电子邮件和密码
  3. 完成验证步骤
  4. 登录并开始交易
`

export default function ExchangePage({ params }: { params: { exchange: string } }) {
  const exchange = getExchangeById(params.exchange)

  if (!exchange) {
    notFound()
  }

  // 生成注册指南
  const instructions = getInstructions(exchange.name, exchange.buttonText)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Button asChild variant="ghost" size="sm" className="mb-2">
          <Link href="/download">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回交易所列表
          </Link>
        </Button>

        <h1 className="text-3xl font-bold">{exchange.name}</h1>
        <p className="text-muted-foreground">{exchange.description}</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Image
              src={exchange.image || "/placeholder.svg"}
              alt={exchange.name}
              width={160}
              height={80}
              className="h-16 w-auto object-contain"
            />
            <CardTitle>{exchange.name}注册链接</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose dark:prose-invert max-w-none">{instructions}</div>

          <div className="flex justify-center pt-4">
            <Button asChild size="lg">
              <a href={exchange.referralLink} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                {exchange.buttonText}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

