import React from "react";
import Navbars from "./headers/navbars";
import Footers from "./footer/footers";


export default function LayoutWraps({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Navbars />
      </header>
      <main>
        {children}
      </main>
      <Footers />
    </>
  )
}