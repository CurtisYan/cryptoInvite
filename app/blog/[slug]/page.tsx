import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getPostData } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Button asChild variant="ghost" size="sm" className="mb-2">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回文章列表
          </Link>
        </Button>

        <h1 className="text-3xl font-bold">{post.title}</h1>
        {post.description && <p className="text-muted-foreground">{post.description}</p>}

        {post.date && (
          <div className="text-sm text-muted-foreground">发布于 {new Date(post.date).toLocaleDateString("zh-CN")}</div>
        )}
      </div>

      <Separator />

      <MarkdownContent content={post.contentHtml} />
    </div>
  )
}

