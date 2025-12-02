import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import { format } from 'date-fns'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const payload = await getPayload({ config })

  const posts = await payload.find({
    collection: 'posts',
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: '-publishedDate',
  })

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Blog
        </h1>
        <p className="text-gray-600 mb-12">
          Thoughts, reflections, and teachings from our pastor.
        </p>

        {posts.docs.length === 0 ? (
          <p className="text-gray-500">No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-8">
            {posts.docs.map((post) => (
              <article
                key={post.id}
                className="border-b border-gray-200 pb-8 last:border-0"
              >
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {post.title}
                  </h2>
                  {post.publishedDate && (
                    <time className="text-sm text-gray-500 block mb-3">
                      {format(new Date(post.publishedDate), 'MMMM d, yyyy')}
                    </time>
                  )}
                  {post.excerpt && (
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  )}
                  <span className="inline-block mt-4 text-blue-600 group-hover:underline">
                    Read more →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

