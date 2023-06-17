"use client";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"



const Section1About = () => {
  const [readMore, setReadMore] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const handleReadMore = () => {
    setReadMore(true)
  }

  const handleActiveTabs = (tabNumbers: any) => {
    setActiveTab(tabNumbers);
  }
  return (
    <section className="bg-white">
      <div className="flex justify-center items-center  px-4 py-4 md:px-24 mb-7">
        <div className="mx-auto">
          <div className="rounded h-64 overflow-hidden">
            <Image
              alt="content"
              className="object-cover md:object-contain"
              src={'/img/bg-img2.jpg'}
              width={1200}
              height={550}
            />
          </div>
          <div className="flex flex-col mt-10 md:grid md:grid-rows-3 md:grid-flow-col md:gap-3 ">
            <div className="text-center md:row-span-3">
              <div className="w-20 h-20 md:mb-8 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image src={"/img/myphotoss.jpeg"} className="rounded-full" width={60} height={40} alt="myphotos" />
              </div>
              <div className="flex flex-col items-center text-center justify-center  md:-rotate-90 md:mt-16">
                <h2 className="mt-4 text-gray-800 text-2xl font-light md:text-4xl">
                  Dede <span className="text-red-800">Maulana</span>
                </h2>
                <div className="w-16 h-1 bg-red-800 rounded mt-2 mb-4 md:w-24" />
              </div>
            </div>
            <div className="md:col-span-2 flex md:items-center px-2">
              <p className="font-light">
                {" ' "}All truth passes through three stages. First, it is ridiculed. Second, it is violently opposed.
                Third, it is accepted as being self-evident.{" ' "} <span className="text-xs md:text-sm text-gray-500">Arthur Schopenhauer</span>
              </p>
            </div>
            <div className=" border-gray-200  border-t py-2 px-2  md:border-l md:row-span-2 md:col-span-2">
              <p className="leading-relaxed mb-4 text-gray-700">
                <span className="text-2xl text-red-800">Hello,</span> I am 26 y.o , i am someone who has broad interests in a variety of fields, including technology, business, computers, and the arts. In technology, I explore the latest innovations and advances, with a particular interest in the development of technology-driven applications and solutions.
                Apart from that, I am also interested in technology-related business aspects, such as marketing strategy and product development. In the computer field, I have knowledge of and computer systems that enable me to create solutions and solve problems efficiently.
                Lastly, in art, I find creativity and satisfaction in producing works of visual art, through photography or graphic design. My combination of interests in technology, business, computers, and the arts provides a unique perspective and diverse skills for living my journey.
              </p>
              <div></div>
              {!readMore && (
                <button onClick={handleReadMore} className="bg-red-800 rounded text-white px-2 py-1 inline-flex items-center hover:underline">
                  Read More <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                  </svg>

                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {readMore && (
        <div className="py-4 px-6 mx-auto md:px-24">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div><h1 className="text-3xl text-gray-400 md:text-5xl">EDUCATION</h1></div>
            <div className="py-8 flex flex-wrap ">
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
                <Link href={"https://www.sman5pandeglang.sch.id/"} className="text-red-800 inline-flex items-center mt-4 hover:underline">
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
                <Link href={"http://students.bsi.ac.id/mahasiswa/login_akd.aspx"} className="text-red-800 inline-flex items-center mt-4 hover:underline">
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
          <div className=" py-24 mx-auto flex flex-wrap flex-col">
            <div className="py-4">
              <h1 className="text-3xl text-gray-400 md:text-5xl">EXPERIENCE</h1>
            </div>
            <div className="flex mx-auto flex-wrap mb-20 ">
              <button className={`${activeTab === 1
                ? ' justify-center px-2 py-2 border-b-2 font-bold inline-flex items-center  border-blue-600  text-blue-600'
                : ' justify-center px-2 py-2 border-b-2  font-medium inline-flex items-center  border-gray-200 text-gray-500'}`}
                onClick={() => handleActiveTabs(1)}
              >

                Trans Retail Indonesia
              </button>
              <button className={`${activeTab === 2
                ? ' justify-center px-2 py-2  border-b-2  font-bold inline-flex items-center  border-indigo-700 text-indigo-700 '
                : ' justify-center px-2 py-2  border-b-2  font-medium inline-flex items-center  border-gray-200 text-gray-500'}`}
                onClick={() => handleActiveTabs(2)}
              >
                JASANYA.TECH
              </button>

            </div>
            {activeTab === 1 && <div>
              <Image
                className="block mx-auto "
                alt="photos"
                src={'/logo/logotransretail.jfif'}
                width={240}
                height={200}
              />
              <div className="flex flex-col text-center w-full">
                <h1 className="text-2xl font-semibold mb-4 text-sky-500">
                  as Customer Service <span className="text-sm text-gray-500">- 3 years</span>
                </h1>
                <p className=" mx-auto leading-relaxed text-base text-gray-600">
                  I once worked as a customer service in a retail store. As a customer service, my job is to serve customers in a friendly manner and assist them in choosing the right product.
                  I am also responsible for answering customer questions about products, handling returns or refunds, and resolving customer problems or complaints quickly and efficiently. Apart from that,
                  I am also involved in the checkout process and handling payment transactions. This experience has helped me hone my skills in communicating well, maintaining professionalism, and providing outstanding customer service in a retail store environment.
                </p>
              </div>
            </div>}
            {activeTab === 2 && <div>
              <Image
                className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
                alt="photos"
                src={'/logo/ssjasanya.png'}
                width={720}
                height={500}
              />
              <div className="flex flex-col text-center w-full">
                <h1 className="text-xl font-semibold mb-4 text-indigo-700">
                  as FrontEnd Developer <span className="text-xs text-gray-500">- 1 years</span>
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  I have worked as a freelance frontend developer on a website or mobile app project for one year with a team from the best academic circles,
                  I and the team have very useful knowledge for web technology where we make it happen with design, consistency and up-to-date technology
                </p>
                <Link href={"https://jasanya.tech/"} className="text-indigo-700 underline mt-4">
                  Visit
                </Link>
              </div>
            </div>}

          </div>
        </div>



      )}
    </section>
  )
}

export default Section1About