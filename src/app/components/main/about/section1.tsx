"use client";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Section1About = () => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(true)
  }
  return (
    <section >
      <div className="container py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded h-64 overflow-hidden">
            <Image
              alt="content"
              className="object-cover object-center h-full w-full"
              src={'/img/bg-img2.jpg'}
              width={1200}
              height={550}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image src={"/img/myphotoss.jpeg"} className="rounded-full" width={60} height={40} alt="myphotos" />
              </div>
              <div className="flex flex-col items-center text-center justify-center">

                <h2 className="font-bold mt-4 text-gray-900 text-lg">

                  Dede Maulana
                </h2>
                <div className="w-12 h-1 bg-red-800 rounded mt-2 mb-4" />
                <p className="text-base">
                  All truth passes through three stages. First, it is ridiculed. Second, it is violently opposed.
                  Third, it is accepted as being self-evident. <span className="text-xs text-gray-600">Arthur Schopenhauer</span>
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4 text-gray-700">
                <span className="text-2xl font-semibold">Hello,</span> I am someone who has broad interests in a variety of fields, including technology, business, computers, and the arts. In technology, I explore the latest innovations and advances, with a particular interest in the development of technology-driven applications and solutions.
                Apart from that, I am also interested in technology-related business aspects, such as marketing strategy and product development. In the computer field, I have knowledge of and computer systems that enable me to create solutions and solve problems efficiently.
                Lastly, in art, I find creativity and satisfaction in producing works of visual art, through photography or graphic design. My combination of interests in technology, business, computers, and the arts provides a unique perspective and diverse skills for living my journey.
              </p>
              <div></div>
              {!readMore && (
                <button onClick={handleReadMore} className="text-red-500 inline-flex items-center hover:underline">
                  Read More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {readMore && (

        <div className=" px-24 mx-auto ">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div><h1 className="text-3xl text-gray-400 font-semibold">EDUCATION</h1></div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  High School
                </span>
                <span className="mt-1 text-gray-500 text-sm">2011 - 2014</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  SMA Negeri 5 Pandeglang, Banten
                </h2>
                <p className="leading-relaxed text-gray-500">
                  This is a school located in the area or village of Pandeglang, I majored in science while I was studying here
                </p>
                <Link href={"https://www.sman5pandeglang.sch.id/"} className="text-red-500 inline-flex items-center mt-4 hover:underline">
                  Visit
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  University
                </span>
                <span className="mt-1 text-gray-500 text-sm">2020 - 2024</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Bina Sarana Informatika, Jakarta
                </h2>
                <p className="leading-relaxed text-gray-500">
                  Now I am studying at that campus, I am majoring in information technology, I am currently in semester 7
                </p>
                <Link href={"http://students.bsi.ac.id/mahasiswa/login_akd.aspx"} className="text-red-500 inline-flex items-center mt-4 hover:underline">
                  Visit
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>

      )}
    </section>
  )
}

export default Section1About