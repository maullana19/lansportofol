

import { Metadata } from "next";
import LayoutWraps from "./components/layoutwrap";
import SectionsHome1 from "./components/main/home/section1";

export const metadata: Metadata = {
  title: "Welcome To My Portofolio",
}


export default function Home() {
  return (
    <LayoutWraps>
      <SectionsHome1 />
    </LayoutWraps>
  )
}
