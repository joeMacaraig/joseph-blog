import { draftMode } from "next/headers";

import MoreStories from "./more-stories";

import { HeroPost } from "./components/HeroPost";

import { getAllPosts } from "@/lib/api";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts?.[0];
  const morePosts = allPosts?.slice(1);

  return (
    <div className="max-w-6xl mx-auto">
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
