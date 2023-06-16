import LayoutWraps from "../components/layoutwrap";

import { Metadata } from "next";
import BlogLayout from "./layout_blog";


export const metadata: Metadata = {
  title: "Blog",
}

export default function BlogPage() {
  return (
    <>
      <LayoutWraps>
        <BlogLayout>
          This Page Under Development
        </BlogLayout>
      </LayoutWraps>
    </>
  )
}
