import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllPostsData } from "@/lib/markdown"
import { Badge } from "@/components/ui/badge"

export default async function BlogPage() {
  const posts = await getAllPostsData()

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">博客文章</h1>
        <p className="text-muted-foreground">了解最新的加密货币交易所信息和教程</p>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.slug}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle>{post.title}</CardTitle>
                {post.featured && (
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500"
                  >
                    置顶
                  </Badge>
                )}
              </div>
              {post.date && (
                <div className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString("zh-CN")}</div>
              )}
            </CardHeader>
            <CardContent>
              <CardDescription>{post.description}</CardDescription>
              {post.tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" size="sm">
                <Link href={`/blog/${post.slug}`}>
                  阅读全文
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

