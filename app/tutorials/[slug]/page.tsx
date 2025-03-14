import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getTutorialData } from "@/lib/markdown"
import MarkdownContent from "@/components/markdown-content"
import { getAllExchanges } from "@/lib/exchanges"

export default async function TutorialPage({ params }: { params: { slug: string } }) {
  const tutorial = await getTutorialData(params.slug)

  if (!tutorial) {
    notFound()
  }

  // Find the exchange that corresponds to this tutorial
  const exchanges = await getAllExchanges()
  const exchange = exchanges.find((ex) => ex.tutorialSlug === params.slug)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Button asChild variant="ghost" size="sm" className="mb-2">
          <Link href="/tutorials">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回教程列表
          </Link>
        </Button>

        <h1 className="text-3xl font-bold">{tutorial.title}</h1>
        {tutorial.description && <p className="text-muted-foreground">{tutorial.description}</p>}
      </div>

      {exchange && (
        <div className="bg-muted p-4 rounded-lg">
          <p className="font-medium">
            使用我们的推荐链接注册{exchange.name}，获得{exchange.benefits}：
          </p>
          <Button asChild className="mt-2">
            <a href={exchange.referralLink} target="_blank" rel="noopener noreferrer">
              注册{exchange.name}
            </a>
          </Button>
        </div>
      )}

      <Separator />

      <MarkdownContent content={tutorial.contentHtml} />
    </div>
  )
}

