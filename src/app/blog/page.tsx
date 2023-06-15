import LayoutWraps from "../components/layoutwrap";
import BlogLayout from "./layout_blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
}

export default function BlogPage() {
  return (
    <>
      <LayoutWraps>
        <BlogLayout>
          <div>Currently under development</div>
        </BlogLayout>
      </LayoutWraps>
    </>
  )
}