import { Metadata } from "next";
import LayoutWraps from "../components/layoutwrap";
import Section1About from "../components/main/about/section1";

export const metadata: Metadata = {
  title: "About",
}



export default function AboutPage() {
  return (
    <>
      <LayoutWraps>
        <Section1About />
      </LayoutWraps>
    </>
  )
}