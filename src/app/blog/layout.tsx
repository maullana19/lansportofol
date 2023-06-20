
import { Metadata } from "next";
import LayoutWraps from "../components/layoutwrap";
import HeaderBlog from "./component/header_blog";
import SidebarBlog from "./component/sidebar_blog";



export const metadata: Metadata = {
  title: 'Category'
}

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LayoutWraps>
        <section className="min-h-screen md:px-24">
          {/* HEADER BLOG */}
          <HeaderBlog />
          {/* CONTENT BLOG */}
          <div className=" px-2 py-2  min-h-screen md:grid md:grid-cols-3 gap-1">
            <div className="md:col-span-2 ">
              {children}
            </div>
            <div className="  md:flex">
              <SidebarBlog />
            </div>

          </div>
        </section>
      </LayoutWraps>
    </>


  )
}

export default BlogLayout;