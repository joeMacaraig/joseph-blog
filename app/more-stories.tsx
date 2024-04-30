import Link from "next/link";
import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";

function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <div className="">
      <div className="mb-5 overflow-hidden w-full h-full">
        <CoverImage title={title} slug={slug} url={coverImage.url}/>
      </div>
      <div className="px-4 pb-8">
        <h3 className="text-3xl mb-3 leading-snug">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <DateComponent dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
    </div>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section className="border-b border-black">
      <h2 className="text-6xl py-8 px-4">More Stories</h2>
      <div className="divide-y divide-black">
        {morePosts?.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
