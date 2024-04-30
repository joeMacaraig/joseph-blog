import ContentfulImage from "../lib/contentful-image";
import Link from "next/link";

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CoverImage({
  title,
  url,
  slug,
}: {
  title: string;
  url: string;
  slug?: string;
}) {
  const image = (
    <ContentfulImage
      alt={`Cover Image for ${title}`}
      priority
      width={2000}
      height={1000}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      src={url}
    />
  );

  return (
    <div className="w-full h-full overflow-hidden">
      {slug ? (
        <div className="hover:scale-110 duration-500 hover:opacity-75">

        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
        </div>
      ) : (
        image
      )}
    </div>
  );
}
