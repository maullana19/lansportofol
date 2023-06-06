import Link from "next/link";


export default function MyStore() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div>BEING DEVELOPMENT</div>
        <hr />
        <div>
          <Link href={'/'} className={'text-blue-700 font-sans hover:underline'}>
            BACK TO HOME
          </Link>
          <div className="w-48 h-10 bg-gray-200 relative overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-0 hover:bg-blue-500 transition-all duration-500"></span>
            <span className="relative z-10 hover:rotate-45">Hover me!</span>
          </div>
        </div>
      </div>
    </>
  )
}