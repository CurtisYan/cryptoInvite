import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { getAllPostsData, getAllTutorialsData } from "@/lib/markdown"
import { Badge } from "@/components/ui/badge"
import { getPopularExchanges } from "@/lib/exchanges"

// 使用统一的数据源获取热门交易所
const exchanges = getPopularExchanges(3)

export default async function Home() {
  const posts = await getAllPostsData()
  const tutorials = await getAllTutorialsData()

  // Get featured post or first post
  const featuredPost = posts.find((post) => post.featured) || posts[0]

  // Get first 3 tutorials
  const featuredTutorials = tutorials.slice(0, 3)

  return (
    <div className="space-y-8">
      <div className="border border-primary/20 bg-primary/5 p-3 rounded-lg mb-6 text-center shadow-sm">
        <p className="text-primary font-medium">
          此静态网站可出售，价优，详情请点击导航栏的联系我板块
        </p>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">加密货币交易所返佣</h1>
        <p className="text-muted-foreground">通过我们的推荐链接加入顶级加密货币交易所，获取独家奖励和返佣</p>
      </div>

      {/* 专属链接置顶卡片 */}
      <Card className="border-2 border-primary">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl">专属推荐链接</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">使用我们的专属推荐链接注册交易所，获得最高返佣和独家福利</p>
        </CardContent>
        <CardFooter>
          <Button asChild size="lg">
            <Link href="/download">
              获取专属链接
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">热门交易所</h2>
        <div className="grid gap-4">
          {exchanges.map((exchange) => (
            <Card key={exchange.id}>
              <div className="flex items-center p-4">
                <Image
                  src={exchange.image || "/placeholder.svg"}
                  alt={exchange.name}
                  width={80}
                  height={40}
                  className="h-10 w-auto object-contain mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{exchange.name}</h3>
                  <p className="text-sm text-muted-foreground">{exchange.description}</p>
                </div>
                <Button asChild size="sm">
                  <a href={exchange.referralLink} target="_blank" rel="noopener noreferrer">{exchange.buttonText}</a>
                </Button>
              </div>
            </Card>
          ))}
          <Button asChild variant="outline" className="w-fit">
            <Link href="/download">
              查看全部交易所
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {featuredPost && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">推荐文章</h2>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle>{featuredPost.title}</CardTitle>
                {featuredPost.featured && (
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500"
                  >
                    置顶
                  </Badge>
                )}
              </div>
              {featuredPost.date && (
                <div className="text-sm text-muted-foreground">
                  {new Date(featuredPost.date).toLocaleDateString("zh-CN")}
                </div>
              )}
            </CardHeader>
            <CardContent>
              <CardDescription>{featuredPost.description}</CardDescription>
              {featuredPost.tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {featuredPost.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <Link href={`/blog/${featuredPost.slug}`}>
                  阅读全文
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Button asChild variant="outline" className="w-fit">
            <Link href="/blog">
              查看全部文章
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">热门教程</h2>
        <div className="grid gap-4">
          {featuredTutorials.map((tutorial) => (
            <Card key={tutorial.slug}>
              <CardHeader className="pb-2">
                <CardTitle>{tutorial.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{tutorial.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/tutorials/${tutorial.slug}`}>
                    阅读教程
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
          <Button asChild variant="outline" className="w-fit">
            <Link href="/tutorials">
              查看全部教程
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

