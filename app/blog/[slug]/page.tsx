import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import { format } from 'date-fns'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })

  const posts = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const post = posts.docs[0]

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | GraceLife Church`,
    description: post.excerpt || undefined,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const posts = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
      status: {
        equals: 'published',
      },
    },
    limit: 1,
  })

  const post = posts.docs[0]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/blog"
          className="text-blue-600 hover:underline mb-8 inline-block"
        >
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          {post.publishedDate && (
            <time className="text-gray-500">
              {format(new Date(post.publishedDate), 'MMMM d, yyyy')}
            </time>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          {/* Rich text content will be rendered here */}
          {post.content && (
            <div
              dangerouslySetInnerHTML={{
                __html: serializeRichText(post.content),
              }}
            />
          )}
        </div>
      </article>
    </main>
  )
}

// Helper function to serialize Lexical rich text to HTML
function serializeRichText(content: unknown): string {
  if (!content || typeof content !== 'object') return ''
  
  const root = (content as { root?: { children?: unknown[] } }).root
  if (!root || !root.children) return ''

  return root.children.map(serializeNode).join('')
}

function serializeNode(node: unknown): string {
  if (!node || typeof node !== 'object') return ''
  
  const n = node as {
    type?: string
    text?: string
    format?: number
    children?: unknown[]
    tag?: string
    listType?: string
    url?: string
  }

  // Text node
  if (n.type === 'text') {
    let text = n.text || ''
    // Handle formatting
    if (n.format) {
      if (n.format & 1) text = `<strong>${text}</strong>` // Bold
      if (n.format & 2) text = `<em>${text}</em>` // Italic
      if (n.format & 8) text = `<u>${text}</u>` // Underline
      if (n.format & 16) text = `<code>${text}</code>` // Code
    }
    return text
  }

  // Element nodes
  const children = n.children ? n.children.map(serializeNode).join('') : ''

  switch (n.type) {
    case 'paragraph':
      return `<p>${children}</p>`
    case 'heading':
      const tag = n.tag || 'h2'
      return `<${tag}>${children}</${tag}>`
    case 'list':
      const listTag = n.listType === 'number' ? 'ol' : 'ul'
      return `<${listTag}>${children}</${listTag}>`
    case 'listitem':
      return `<li>${children}</li>`
    case 'link':
      return `<a href="${n.url || '#'}" class="text-blue-600 hover:underline">${children}</a>`
    case 'quote':
      return `<blockquote class="border-l-4 border-gray-300 pl-4 italic">${children}</blockquote>`
    default:
      return children
  }
}

