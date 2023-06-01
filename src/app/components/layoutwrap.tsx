import React from "react";
import Navbars from "./headers/navbars";


export default function LayoutWraps({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Navbars />
      </header>
      <main>
        {children}
      </main>
    </>
  )
}