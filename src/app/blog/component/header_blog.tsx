"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSearchParams } from "next/navigation";


const HeaderBlog = () => {
  const pathnames = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className=" mt-16 flex px-2 py-2 justify-between border-b border-gray-300">
      <div className="flex gap-5 ">
        <div>
          <Link className={pathnames === '/blog/dailyblog'
            ? 'font-bold bg-red-500 px-2 py-1 text-white rounded'
            : 'font-normal text-gray-500'} href={"/blog/dailyblog"}>Daily Blog</Link>
        </div>
        <div>
          <Link className={pathnames === '/blog/news'
            ? 'font-bold bg-red-500 px-2 py-1 text-white rounded'
            : 'font-normal text-gray-500'} href={"blog/news"}>News</Link>
        </div>
        <div>
          <Link className={pathnames === '/blog/trending'
            ? 'font-bold bg-red-500 px-2 py-1 text-white rounded'
            : 'font-normal text-gray-500'} href={"blog/trending"}>Trending</Link>
        </div>
        <div>
          <Link className={pathnames === '/blog/project'
            ? 'font-bold bg-red-500 px-2 py-1 text-white rounded'
            : 'font-normal text-gray-500'} href={"blog/project"}>Project</Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderBlog