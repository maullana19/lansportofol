import Link from "next/link"

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen flex flex-col">
      {/* HEADER BLOG */}
      <div className=" mt-16 flex flex-nowrap px-4 py-2 gap-5 md:px-24">
        <div>
          <Link className="font-semibold" href={"#"}>Daily Blog</Link>
        </div>
        <div>
          <Link href={"#"}>News</Link>
        </div>
        <div>
          <Link href={"#"}>Trending</Link>
        </div>
        <div>
          <Link href={"#"}>Projects</Link>
        </div>
      </div>
      {/* CONTENT BLOG */}
      <div className=" px-4 py-2 flex flex-col md:px-24">
        {children}
      </div>
    </section>
  )
}

export default BlogLayout;