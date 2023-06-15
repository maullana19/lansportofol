"use client";
import { Navbar } from 'flowbite-react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';



const Navbars = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const pathname = usePathname();

  useEffect(() => {
    const handleScrool = () => {
      if (window.scrollY > 70) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
    }

    window.addEventListener('scroll', handleScrool);

    return () => {
      window.removeEventListener('scroll', handleScrool)
    }
  }, [])
  return (
    <Navbar

      className={`md:px-24  shadow fixed  z-30 left-0 right-0  ${showNavbar ? 'top-0 transition duration-500 ease-in-out' : '-top-full transition duration-500 ease-in-out'}`}
    >
      <Navbar.Brand href={"/"}>

        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Lans<span className='text-[#AA5656]'>PORTO</span>
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link className={"bg-[#AA5656] rounded-md px-3 py-2 font-semibold text-white hover:bg-red-800"} href={'/mystore'}>
          My Store
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className={""}>
        <Navbar.Link
          className={pathname === '/' ? 'font-bold text-red-500 underline' : 'font-normal'}
          href={'/'}

        >
          Home
        </Navbar.Link>
        <Navbar.Link className={pathname === '/about' ? 'font-bold text-red-500 underline' : 'font-normal'} href={"/about"}>
          About
        </Navbar.Link>
        <Navbar.Link className={pathname === '/blog' ? 'font-bold text-red-500 underline' : 'font-normal'} href={"/blog"}>
          Blog
        </Navbar.Link>
        <Navbar.Link className={pathname === '/contact' ? 'font-bold text-red-500 underline' : 'font-normal'} href={"/contact"}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbars