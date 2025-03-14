import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen } from "lucide-react"
import { getAllExchanges } from "@/lib/exchanges"

// 使用统一的数据源获取所有交易所
const exchanges = getAllExchanges()

export default function DownloadPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">交易所邀请链接</h1>
        <p className="text-muted-foreground">通过我们的推荐链接注册，在顶级加密货币交易所获取独家奖励和返佣</p>
      </div>

      <div className="space-y-6">
        {exchanges.map((exchange) => (
          <Card key={exchange.id}>
            <CardHeader className="pb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src={exchange.image || "/placeholder.svg"}
                    alt={exchange.name}
                    width={80}
                    height={40}
                    className="h-10 w-auto object-contain rounded-sm"
                  />
                  <CardTitle>{exchange.name}</CardTitle>
                </div>
                <div className="flex space-x-2">
                  <Button asChild>
                    <a href={exchange.referralLink} target="_blank" rel="noopener noreferrer">
                      {exchange.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/tutorials/${exchange.tutorialSlug}`}>
                      <BookOpen className="mr-2 h-4 w-4" />
                      查看教程
                    </Link>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p>{exchange.description}</p>
              <p className="text-sm text-muted-foreground mt-1">{exchange.benefits}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

