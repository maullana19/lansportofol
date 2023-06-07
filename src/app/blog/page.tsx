import LayoutWraps from "../components/layoutwrap";

export default function BlogPage() {
  return (
    <>
      <LayoutWraps>
        <div className={"min-h-screen justify-center items-center flex"}>
          <div>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-700"></span>
            </span>
            <h1 className=" text-gray-700 font-semibold">BLOG | Under Development</h1>
          </div>
        </div>
      </LayoutWraps>
    </>
  )
}