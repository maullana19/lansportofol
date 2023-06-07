"use client";
import Link from "next/link";

const SectionsHome1 = () => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('/img/bg-image1.jpg')] bg-gray-600 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Welcome To My Website
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Where here I focus on exploring a world that is unknown to all of us and finding out how the world and nature work


        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href={'/about'}
            className="inline-flex justify-center items-center py-2 px-3 text-base font-medium text-center text-white rounded-lg hover:text-white hover:bg-red-500 hover:animate-bounce"
          >
            Get started
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="flex flex-col mt-6">
          <div>
            <p className="text-gray-500">photo by daniel saphiro. from unsplash</p>
          </div>
        </div>
      </div>
    </section>


  )
}

export default SectionsHome1