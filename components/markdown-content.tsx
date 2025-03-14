import { cn } from "@/lib/utils"

interface MarkdownContentProps {
  content: string
  className?: string
}

export default function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <div
      className={cn("prose dark:prose-invert max-w-none", className)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

