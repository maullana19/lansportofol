import { useSearchParams } from "next/navigation";
import { Metadata } from "next";
import LayoutWraps from "../components/layoutwrap";
import HeaderBlog from "./component/header_blog";



export const metadata: Metadata = {
  title: 'Category'
}

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LayoutWraps>
        <section className="min-h-screen flex flex-col">
          {/* HEADER BLOG */}
          <HeaderBlog />
          {/* CONTENT BLOG */}
          <div className=" px-4 py-2 flex flex-col md:px-24">
            {children}
          </div>
        </section>
      </LayoutWraps>
    </>


  )
}

export default BlogLayout;