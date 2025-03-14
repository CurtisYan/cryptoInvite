import Link from "next/link"
import Image from "next/image"
import { Download, BookOpen, MessageSquare, FileText } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/touxiang.jpeg" 
            alt="江南头像" 
            width={24} 
            height={24} 
            className="rounded-md"
          />
          <span className="font-bold text-lg">江南的加密邀请</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link href="/download" className="flex items-center text-sm font-medium transition-colors hover:text-primary">
            <Download className="mr-1 h-4 w-4" />
            下载
          </Link>
          <Link
            href="/tutorials"
            className="flex items-center text-sm font-medium transition-colors hover:text-primary"
          >
            <BookOpen className="mr-1 h-4 w-4" />
            教程
          </Link>
          <Link href="/blog" className="flex items-center text-sm font-medium transition-colors hover:text-primary">
            <FileText className="mr-1 h-4 w-4" />
            博客
          </Link>
          <Link href="/contact" className="flex items-center text-sm font-medium transition-colors hover:text-primary">
            <MessageSquare className="mr-1 h-4 w-4" />
            联系
          </Link>
        </nav>
      </div>
    </header>
  )
}

