# CryptoRef 网站使用指南

本文档提供了 CryptoRef 加密货币交易所返佣网站的全面使用指南，详细介绍了所有功能的配置和使用方法。

## 目录

1. [网站概述](#网站概述)
2. [内容管理系统](#内容管理系统)
3. [页面配置指南](#页面配置指南)
4. [交易所管理](#交易所管理)
5. [内容创建指南](#内容创建指南)
6. [管理界面使用](#管理界面使用)
7. [常见问题解答](#常见问题解答)

## 网站概述

CryptoRef 是一个专业的加密货币交易所返佣网站，主要功能包括：

- 提供各大交易所的专属推荐注册链接
- 通过 Markdown 格式提供详细的交易所注册和使用教程
- 发布加密货币相关的博客文章
- 提供联系页面，方便用户咨询和反馈
- 管理界面用于创建和编辑内容

## 内容管理系统

### Markdown 基础

网站使用 Markdown 格式存储内容，主要语法包括：

\`\`\`
# 一级标题
## 二级标题
**粗体文本**
*斜体文本*
[链接文本](https://example.com)
![图片替代文本](/path/to/image.jpg)
\`\`\`

### 前置元数据格式

每个 Markdown 文件都需要包含前置元数据：

**博客文章元数据：**
\`\`\`
---
title: "文章标题"
description: "文章描述"
date: "2024-06-10"
tags: ["标签1", "标签2"]
featured: true  # 是否置顶
---
\`\`\`

**教程元数据：**
\`\`\`
---
title: "教程标题"
description: "教程描述"
date: "2024-06-10"
exchange: "binance"  # 关联的交易所 ID
---
\`\`\`

### 内容目录结构

- `content/posts/`: 存放博客文章
- `content/tutorials/`: 存放教程

## 页面配置指南

### 首页配置

首页展示重要内容和链接，在 `app/page.tsx` 中配置：

- 修改页面标题和描述
- 自定义专属链接卡片
- 调整热门交易所显示

### 专属链接页面配置

专属链接页面 (`app/download/special/page.tsx`) 展示所有交易所的推荐链接：

- 修改页面标题和描述
- 自定义交易所卡片布局
- 添加特殊样式突出重要交易所

### 联系我页面配置

联系页面 (`app/contact/page.tsx`) 提供用户与网站管理员沟通的渠道：

#### 添加自定义文本

\`\`\`tsx
<div className="text-center mb-12">
  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">联系我们</h1>
  <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
    对加密货币交易所或推荐计划有疑问？我们随时为您提供帮助！
  </p>
</div>
\`\`\`

#### 添加图片

\`\`\`tsx
<div className="mt-6">
  <Image
    src="/contact-image.jpg" // 将图片放在 public 目录下
    alt="联系我们"
    width={400}
    height={300}
    className="rounded-lg"
  />
  <p className="text-sm text-muted-foreground mt-2">我们的客服团队随时为您提供帮助</p>
</div>
\`\`\`

#### 自定义联系信息区域

\`\`\`tsx
<div className="mt-8 p-6 bg-muted rounded-lg">
  <h3 className="text-xl font-medium mb-4">关于我们的团队</h3>
  <div className="flex flex-col md:flex-row gap-6">
    <div>
      <p className="mb-4">
        我们是一支专业的加密货币爱好者团队，致力于为用户提供最优质的交易所推荐和教程。
      </p>
      <p>
        无论您是加密货币新手还是经验丰富的交易者，我们都能为您提供专业的建议和支持。
      </p>
    </div>
    <Image
      src="/team-image.jpg" // 将图片放在 public 目录下
      alt="我们的团队"
      width={300}
      height={200}
      className="rounded-lg"
    />
  </div>
</div>
\`\`\`

## 交易所管理

### 添加新交易所

在 `lib/exchanges.ts` 文件中添加新的交易所对象：

\`\`\`typescript
{
  id: "新交易所ID", // 如 "huobi"
  name: "新交易所名称", // 如 "火币"
  description: "新交易所描述",
  benefits: "提供的福利", // 如 "高达20%手续费折扣"
  image: "/exchanges/exchange-logo.png", // 交易所 logo 路径
  referralLink: "https://example.com/register?ref=YOUR_REF_ID", // 推荐链接
  tutorialSlug: "exchange-guide", // 对应的教程文件名（不含.md后缀）
}
\`\`\`

### 交易所推荐链接管理

更新推荐链接：

1. 打开 `lib/exchanges.ts` 文件
2. 找到需要更新的交易所对象
3. 修改 `referralLink` 字段
4. 保存文件

### 交易所图片配置

1. 在 `public` 目录下创建 `exchanges` 文件夹
2. 将交易所 logo 图片放入该文件夹（推荐尺寸：160×80 像素）
3. 在 `lib/exchanges.ts` 文件中引用图片

## 内容创建指南

### 创建交易所教程

1. 在 `content/tutorials/` 目录下创建新的 `.md` 文件
2. 添加前置元数据
3. 编写教程内容，包括：
   - 注册步骤
   - 下载应用指南
   - 身份验证流程
   - 充值和交易指南
   - 特色功能介绍
   - 安全提示
   - 常见问题解答

### 创建博客文章

1. 在 `content/posts/` 目录下创建新的 `.md` 文件
2. 添加前置元数据
3. 编写文章内容，包括：
   - 引言
   - 主体内容
   - 结论
   - 相关链接

### 添加图片和媒体

1. 在 `public` 目录下创建专门的子目录：
   - `public/blog/` - 存放博客文章图片
   - `public/tutorials/` - 存放教程图片
2. 在 Markdown 中引用图片：
   \`\`\`markdown
   ![图片描述](/blog/image-name.jpg)
   \`\`\`

## 管理界面使用

管理界面 (`app/admin/page.tsx`) 提供了创建和编辑 Markdown 内容的用户友好界面。

### 创建新内容

1. 访问 `/admin` 页面
2. 选择"博客文章"或"教程"选项卡
3. 填写元数据（标题、描述、日期等）
4. 在 Markdown 编辑器中编写内容
5. 点击"复制 Markdown"或"下载 Markdown 文件"
6. 将 Markdown 文件放入相应的目录

### 编辑现有内容

1. 从 `content` 目录中找到要编辑的文件
2. 将文件内容复制到管理界面的编辑器中
3. 修改内容
4. 导出更新后的内容
5. 用更新后的内容替换原文件

## 常见问题解答

### 1. 如何添加新页面？

1. 在 `app` 目录下创建新的目录和 `page.tsx` 文件
2. 实现页面组件
3. 更新导航组件，添加新页面的链接

### 2. 如何修改网站样式？

1. 全局样式在 `app/globals.css` 文件中
2. 组件样式在各自的组件文件中
3. 使用 Tailwind CSS 类进行样式定制

### 3. 如何设置文章置顶？

在博客文章的前置元数据中设置 `featured: true`

### 4. 如何添加视频教程？

在 Markdown 文件中使用 YouTube 嵌入代码：

\`\`\`html
<div class="video-container">
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>
\`\`\`

### 5. 如何优化图片加载？

1. 压缩图片以减小文件大小
2. 使用 Next.js 的 Image 组件自动优化图片
3. 为图片提供适当的宽度和高度属性

