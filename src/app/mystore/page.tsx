import Link from "next/link";


export default function MyStore() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div
          className="inline-block h-8 w-8 animate-spin text-red-700 rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        <div>Under Development</div>
        <div className="w-48 border border-gray-500 mt-2 mb-2"></div>
        <div>
          <Link href={'/'} className={'text-red-700 font-sans hover:underline'}>
            BACK
          </Link>
        </div>
      </div>
    </>
  )
}