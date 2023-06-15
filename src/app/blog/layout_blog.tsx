"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  const [sideRightBarOpen, setSideRightBarOpen] = useState(false);

  const ToggleMenuSideRightBar = () => {
    setSideRightBarOpen(!sideRightBarOpen);
  }
  return (

    <div className="flex mt-24  px-24">
      <div className="w-3/4  ">
        {children}
      </div>

      <div className={`${sideRightBarOpen ? 'block bg-red-500' : 'hidden'
        } md:block w-1/4 sticky top-0 h-screen`}>
        {/* Toggle Menu */}
        <button
          className="block lg:hidden p-2 bg-red-600 rounded"
          onClick={ToggleMenuSideRightBar}
        >
          button
          {sideRightBarOpen ? 'Close' : 'Menu'}
        </button>
        {/* Search Bar */}
        <div className='mb-3'>
          <input placeholder='search' className='bg-gray-100 border border-gray-200 p-2 w-full rounded' />
        </div>
        <nav className="bg-gray-100 p-4 mb-4">
          {/* Menu */}
          <ul>
            <li className="mb-2">
              <Link href={"#"}>Daily Blog</Link>
            </li>
            <li className="mb-2">
              <Link href={"#"}>News</Link>
            </li>

            <li className="mb-2">
              <Link href={"#"}>Trending</Link>
            </li>
          </ul>
        </nav>
        {/* Elemen Lainnya */}
        <div className="bg-gray-100 p-4 mb-3">
          <h3 className="text-lg font-semibold mb-2">About Blog</h3>
          <p>This page is under development or under construction, sorry</p>
        </div>
        <div className='p-4 '>
          <div className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href={"#"}
                  className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >

                  Blog
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link
                    href={"#"}
                    className="ml-1 text-sm font-medium text-gray-500 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Daily Blog
                  </Link>
                </div>
              </li>

            </ol>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogLayout;


