"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelectedLayoutSegments, useSearchParams } from "next/navigation";

const SidebarBlog = () => {

  const [stickySide, setStickySide] = useState(true);
  const segment = useSelectedLayoutSegments();
  const searchParams = useSearchParams();
  const searchBar = searchParams.get('blogs');



  useEffect(() => {
    const handleScroolSide = () => {
      { window.scrollY > 70 ? setStickySide(false) : setStickySide(true) }
    }
    window.addEventListener('scroll', handleScroolSide);
    return () => {
      window.removeEventListener('scroll', handleScroolSide);
    }
  }, [])

  return (
    <>

      <div
        className={`${stickySide
          ? "mx-auto hidden bg-white  md:flex md:flex-col gap-4 mt-3 px-6 py-2"
          : "mx-auto hidden  bg-white md:flex flex-col gap-4 fixed top-8 right-28  z-10 w-80"}
          `}
      >
        <div className="w-full">
          <input type="text" className=" bg-gray-100 rounded  w-full border-separate"
            placeholder={`search`} />
        </div>
        <div className="">
          <div>
            <h1 className="text-lg">ABOUT</h1>
            <p className="text-base text-gray-500">As long as I come to my personal blog, I made this blog so that readers also know what I am doing and so on</p>
          </div>
        </div>

        <div className="mx-auto w-full text-gray-400">
          <div className="flex gap-1">
            <div className="w-full rounded-md">
              <ol className="list-reset flex">
                {segment.map((segment, index) => (
                  <><li key={index}>
                    <Link href="#" className="text-red-700 hover:underline">Blog</Link></li>
                    <li>
                      <span className="mx-2 text-neutral-500 ">/</span>
                    </li>
                    <li className="text-neutral-500 ">
                      {segment}
                    </li>
                  </>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SidebarBlog;