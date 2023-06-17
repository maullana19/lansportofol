"use client";
import { Navbar } from 'flowbite-react'
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
        <span className="self-center whitespace-nowrap text-xl ml-1">
          Lans<span className='text-[#B14E46]'>PORTO</span>
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link className={"text-slate-800 flex rounded-md px-3 py-2 mr-2 hover:text-red-600"} href={'/mystore'}>
          LanStore <span><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-slate-800 hover:text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          </span>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className={""}>
        <Navbar.Link
          className={pathname === '/' ? 'font-bold text-red-800 underline' : 'text-slate-700'}
          href={'/'}
        >
          Home
        </Navbar.Link>
        <Navbar.Link className={pathname === '/about' ? 'font-bold text-red-800 underline' : 'text-slate-700'} href={"/about"}>
          About
        </Navbar.Link>
        <Navbar.Link className={pathname === '/blog' ? 'font-bold text-red-800 underline' : 'text-slate-700'} href={"/blog"}>
          Blog
        </Navbar.Link>
        <Navbar.Link className={pathname === '/contact' ? 'font-bold text-red-800 underline' : 'text-slate-700'} href={"/contact"}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbars