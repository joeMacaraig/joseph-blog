import { draftMode } from "next/headers";

import Link from "next/link";

import { getAllNavigation } from "@/lib/api";

export const Navbar = async () => {
  const { isEnabled } = draftMode();
  const allNav = await getAllNavigation(isEnabled);
  const title = allNav?.[0];
  const navigation = allNav?.slice(1);
  return (
    <nav className="border-b border-black flex items-center divide-x divide-black">
      <div className="flex-grow text-center border-black text-4xl font-bold">
        <h1 className="">
          <Link
            href={`${title.link}`}
            className="hover:underline leading-tight"
          >
            {title.name}
          </Link>
          .
        </h1>
      </div>
      <div className="flex h-[100%] divide-x divide-black px-8 items-center">
        {navigation?.map((item) => (
          <Link href={`${item.link}`} className="py-6 px-8">
            {item.name}
          </Link>
        ))}
      </div>
      {/* mobile */}
      <div className="p-6 md:p-8 flex sm:hidden">icon</div>
    </nav>
  );
};
