import { allBlogPosts } from "contentlayer/generated"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import Icon from "src/components/icon"
import Markdown from "src/components/markdown"
import StandardLayout from "src/components/standard-layout"
import { widont } from "src/lib/html"

export default function BlogPage({ params }: { params: { slug: string[] } }) {
  const [year, maybeSlug] = params.slug
  const slug = maybeSlug || year
  const post = allBlogPosts.find((post) => post.slug === slug)
  if (!post) {
    return notFound()
  }
  if (year !== post.year) {
    return redirect(post.url)
  }

  return (
    <StandardLayout>
      <article className="lg:flex">
        <header className="mb-10 mr-0 flex max-w-[13rem] flex-1 flex-col justify-between lg:mb-0 lg:mr-24">
          <div>
            <h1
              className="mb-1 leading-normal text-purple"
              dangerouslySetInnerHTML={{
                __html: widont(post.title),
              }}
            />
            <time className="opacity-50" dateTime={post.date}>
              {post.formattedDate}
            </time>
          </div>
          <div className="hidden lg:block">
            <BackHome />
          </div>
        </header>
        <div className="markdown max-w-xl xl:max-w-2xl">
          <Markdown code={post.body.code} />
        </div>
        <footer className="-ml-4 max-w-xl py-12 text-center lg:hidden">
          <BackHome />
        </footer>
      </article>
    </StandardLayout>
  )
}

function BackHome() {
  return (
    <Link href="/" className="opacity-50 hover:opacity-75">
      <span className="mr-2 inline-block">
        <Icon
          name="arrow-right"
          width={12}
          height={12}
          className="-scale-x-100"
        />
      </span>
      Back home
    </Link>
  )
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: [post.year, post.slug],
  }))
}