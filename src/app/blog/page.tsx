
import { Metadata } from "next";
import SectionBlog1 from "../components/main/blog/section_blog1";



export const metadata: Metadata = {
  title: "Blog",
}



export default function BlogPage() {

  return (
    <>
      <SectionBlog1 />
    </>
  )
}

