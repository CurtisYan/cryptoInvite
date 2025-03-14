"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('post')
  const [markdownContent, setMarkdownContent] = useState('')
  const [frontMatter, setFrontMatter] = useState({
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    tags: '',
    featured: false,
  })

  const handleFrontMatterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFrontMatter({
      ...frontMatter,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    })
  }

  const generateMarkdownFile = () => {
    const tags = frontMatter.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    
    let frontMatterBlock = `---
title: "${frontMatter.title}"
description: "${frontMatter.description}"
date: "${frontMatter.date}"
`

    if (tags.length > 0) {
      frontMatterBlock += `tags: [${tags.map(tag => `"${tag}"`).join(', ')}]
`
    }

    if (activeTab === 'post' && frontMatter.featured) {
      frontMatterBlock += `featured: true
`
    }

    frontMatterBlock += `---

${markdownContent}`

    return frontMatterBlock
  }

  const handleCopyToClipboard = () => {
    const markdownFile = generateMarkdownFile()
    navigator.clipboard.writeText(markdownFile)
    toast({
      title: "已复制到剪贴板",
      description: "Markdown内容已成功复制到剪贴板。",
    })
  }

  const handleDownload = () => {
    const markdownFile = generateMarkdownFile()
    const blob = new Blob([markdownFile], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${frontMatter.title.toLowerCase().replace(/\s+/g, '-')}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">内容管理</h1>
        <p className="text-muted-foreground">创建新的Markdown格式的博客文章或教程</p>
      </div>

      <Tabs defaultValue="post" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="post">博客文章</TabsTrigger>
          <TabsTrigger value="tutorial">教程</TabsTrigger>
        </TabsList>
        <TabsContent value="post">
          <Card>
            <CardHeader>
              <CardTitle>创建新博客文章</CardTitle>
              <CardDescription>使用Markdown格式编写博客文章内容</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">标题</Label>
                <Input 
                  id="title" 
                  name="title" 
                  value={frontMatter.title} 
                  onChange={handleFrontMatterChange} 
                  placeholder="文章标题" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">描述</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={frontMatter.description} 
                  onChange={handleFrontMatterChange} 
                  placeholder="文章简短描述" 
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">日期</Label>
                <Input 
                  id="date" 
                  name="date" 
                  type="date" 
                  value={frontMatter.date} 
                  onChange={handleFrontMatterChange} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">标签（用逗号分隔）</Label>
                <Input 
                  id="tags" 
                  name="tags" 
                  value={frontMatter.tags} 
                  onChange={handleFrontMatterChange} 
                  placeholder="加密货币, 交易所, 返佣" 
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={frontMatter.featured as boolean}
                  onChange={handleFrontMatterChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="featured">置顶文章</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Markdown内容</Label>
                <Textarea 
                  id="content" 
                  value={markdownContent} 
                  onChange={(e) => setMarkdownContent(e.target.value)} 
                  placeholder="# 文章标题

## 小标题

这是一段正文内容。

- 列表项1
- 列表项2

[链接文本](https://example.com)" 
                  rows={15}
                  className="font-mono"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleCopyToClipboard}>复制Markdown</Button>
              <Button onClick={handleDownload}>下载Markdown文件</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="tutorial">
          <Card>
            <CardHeader>
              <CardTitle>创建新教程</CardTitle>
              <CardDescription>使用Markdown格式编写教程内容</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">标题</Label>
                <Input 
                  id="title" 
                  name="title" 
                  value={frontMatter.title} 
                  onChange={handleFrontMatterChange} 
                  placeholder="教程标题" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">描述</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={frontMatter.description} 
                  onChange={handleFrontMatterChange} 
                  placeholder="教程简短描述" 
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">日期</Label>
                <Input 
                  id="date" 
                  name="date" 
                  type="date" 
                  value={frontMatter.date} 
                  onChange={handleFrontMatterChange} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Markdown内容</Label>
                <Textarea 
                  id="content" 
                  value={markdownContent} 
                  onChange={(e) => setMarkdownContent(e.target.value)} 
                  placeholder="# 教程标题

## 第一步

这是第一步的详细说明。

## 第二步

这是第二步的详细说明。

- 注意事项1
- 注意事项2

## 总结

总结教程的主要内容。" 
                  rows={15}
                  className="font-mono"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleCopyToClipboard}>复制Markdown</Button>
              <Button onClick={handleDownload}>下载Markdown文件</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Markdown指南</CardTitle>
          <CardDescription>基本的Markdown语法参考</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">标题</h3>
              <pre className="mt-2 rounded-md bg-muted p-4 font-mono text-sm">
                # 一级标题
                ## 二级标题
                ### 三级标题
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-medium">格式化</h3>
              <pre className="mt-2 rounded-md bg-muted p-4 font-mono text-sm">
                **粗体文本**
                *斜体文本*
                ~~删除线文本~~
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-medium">列表</h3>
              <pre className="mt-2 rounded-md bg-muted p-4 font-mono text-sm">
                - 无序列表项
                - 另一个无序列表项
                
                1. 有序列表项
                2. 另一个有序列表项
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-medium">链接和图片</h3>
              <pre className="mt-2 rounded-md bg-muted p-4 font-mono text-sm">
                [链接文本](https://example.com)
                
                ![图片替代文本](/path/to/image.jpg)
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-medium">引用</h3>
              <pre className="mt-2 rounded-md bg-muted p-4 font-mono text-sm">
                {'> 这是一个引用文本'}
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-medium">代码</h3>
              <pre className="mt-2 rounded-md bg-muted p-4 font-mono text-sm">
                `行内代码`

                ```
                代码块
                多行代码
                ```
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

