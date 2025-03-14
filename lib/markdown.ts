import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

// Posts directory
const postsDirectory = path.join(process.cwd(), "content/posts")
// Tutorials directory
const tutorialsDirectory = path.join(process.cwd(), "content/tutorials")

// Get all post files
export function getPostFiles() {
  try {
    return fs.readdirSync(postsDirectory)
  } catch (error) {
    console.error("Error reading posts directory:", error)
    return []
  }
}

// Get all tutorial files
export function getTutorialFiles() {
  try {
    return fs.readdirSync(tutorialsDirectory)
  } catch (error) {
    console.error("Error reading tutorials directory:", error)
    return []
  }
}

// Get post data by slug
export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(matterResult.content)

    const contentHtml = processedContent.toString()

    // Combine the data with the slug and contentHtml
    return {
      slug,
      contentHtml,
      ...matterResult.data,
    }
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error)
    return null
  }
}

// Get tutorial data by slug
export async function getTutorialData(slug: string) {
  const fullPath = path.join(tutorialsDirectory, `${slug}.md`)

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the tutorial metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(matterResult.content)

    const contentHtml = processedContent.toString()

    // Combine the data with the slug and contentHtml
    return {
      slug,
      contentHtml,
      ...matterResult.data,
    }
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error)
    return null
  }
}

// Get all posts data
export async function getAllPostsData() {
  const fileNames = getPostFiles()

  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, "")

      // Get post data
      const postData = await getPostData(slug)

      return postData
    }),
  )

  // Sort posts by date
  return allPostsData.filter(Boolean).sort((a, b) => (a.date < b.date ? 1 : -1))
}

// Get all tutorials data
export async function getAllTutorialsData() {
  const fileNames = getTutorialFiles()

  const allTutorialsData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, "")

      // Get tutorial data
      const tutorialData = await getTutorialData(slug)

      return tutorialData
    }),
  )

  // Sort tutorials by date if available, otherwise by title
  return allTutorialsData.filter(Boolean).sort((a, b) => {
    if (a.date && b.date) return a.date < b.date ? 1 : -1
    return a.title < b.title ? -1 : 1
  })
}

