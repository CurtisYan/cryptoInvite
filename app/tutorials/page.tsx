import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllTutorialsData } from "@/lib/markdown"
import { getAllExchanges } from "@/lib/exchanges"

export default async function TutorialsPage() {
  const tutorials = await getAllTutorialsData()
  const exchanges = await getAllExchanges()

  // Group tutorials by type
  const exchangeTutorials = tutorials.filter((tutorial) =>
    exchanges.some((exchange) => exchange.tutorialSlug === tutorial.slug),
  )

  const otherTutorials = tutorials.filter(
    (tutorial) => !exchanges.some((exchange) => exchange.tutorialSlug === tutorial.slug),
  )

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">教程</h1>
        <p className="text-muted-foreground">通过我们的指南，学习如何使用各大交易所</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">交易所注册教程</h2>
        <div className="grid gap-4">
          {exchangeTutorials.map((tutorial) => (
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
        </div>
      </div>

      {otherTutorials.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">其他教程</h2>
          <div className="grid gap-4">
            {otherTutorials.map((tutorial) => (
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
          </div>
        </div>
      )}
    </div>
  )
}

