"use client";
import { Navbar } from 'flowbite-react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";



const Navbars = () => {
  const pathname = usePathname();
  return (
    <Navbar

      className={"md:px-24 bg-white shadow fixed top-0 left-0 right-0 z-30"}
    >
      <Navbar.Brand href={"/"}>
        <Image
          alt="Logo"
          className="mr-3 h-6 sm:h-9"
          src={"/logo/logo-512x.png"}
          width={30}
          height={30}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          LansPorto
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link className={"bg-red-700 rounded-md px-3 py-2 font-semibold text-white hover:bg-red-800"} href={'/mystore'}>
          My Store
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className={""}>
        <Navbar.Link
          className={pathname === '/' ? 'font-bold text-red-600 underline' : 'font-normal'}
          href={'/'}

        >
          Home
        </Navbar.Link>
        <Navbar.Link className={pathname === '/about' ? 'font-bold text-red-600 underline' : 'font-normal'} href={"/about"}>
          About
        </Navbar.Link>
        <Navbar.Link className={pathname === '/blog' ? 'font-bold text-red-600 underline' : 'font-normal'} href={"/blog"}>
          Blog
        </Navbar.Link>
        <Navbar.Link className={pathname === '/contact' ? 'font-bold text-red-600 underline' : 'font-normal'} href={"/contact"}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbars