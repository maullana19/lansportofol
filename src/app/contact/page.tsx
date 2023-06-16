import Link from "next/link";
import LayoutWraps from "../components/layoutwrap";



export default function ContactPage() {
  return (
    <>
      <LayoutWraps>
        <div className="h-screen flex justify-center items-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"

                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                className="  bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </form>
            <div className="flex flex-col items-center mt-9">
              <div>Or send me on your Gmail or something</div>
              <p className="text-red-800">dedemaulana162@gmail.com</p>
            </div>
          </div>
        </div>
      </LayoutWraps>
    </>
  )
}