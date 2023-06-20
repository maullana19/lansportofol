
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";



export const metadata: Metadata = {
  title: "Blog",
}

const datablog = [
  {
    category_blog: "Daily BLOG",
    gambar: '/img/dailyblog.jpg',
    judul: "Daily Blog",
    content: "Here I tell my daily life, and I pour it into writing it",
    link: "#",
  },
  {
    category_blog: "News",
    gambar: '/img/news.jpg',
    judul: "News",
    content: "News from various media I took a little to complement this blog",
    link: "#",
  },
  {
    category_blog: "Trending",
    gambar: '/img/dailyblog.jpg',
    judul: "Trending",
    content: "Tell what is happening from various worlds",
    link: "#",
  },
  {
    category_blog: "Project",
    gambar: '/img/dailyblog.jpg',
    judul: "Project",
    content: "The place where I create my work or project is packaged in this blog",
    link: "#",
  },
]


export default function BlogPage() {

  return (
    <>
      <div className="grid grid-cols-2 gap-2 mt-3">
        {datablog.map(blogs => (
          <div key={blogs.category_blog} className=" bg-white border border-gray-200 rounded-lg shadow ">
            <div className="relative">
              <Link href={"#"}>
                <Image className=" inset-0 w-full md:h-52 object-cover" src={blogs.gambar} alt="gambarBlogCategory" width={250} height={150} />
              </Link>
            </div>
            <div className="p-5">
              <Link href={"#"}>
                <h5 className="mb-2 text-2xl tracking-tight text-gray-900 ">
                  {blogs.category_blog}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-500 ">
                {blogs.content}
              </p>
              <Link
                href={"#"}
                className="inline-flex items-center px-3 py-2 text-sm text-center bg-red-800 text-white rounded"
              >
                Read more
              </Link>
            </div>
          </div>

        ))}
      </div>
    </>
  )
}

