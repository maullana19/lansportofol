import Link from "next/link";


export default function MyStore() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div>BEING DEVELOPMENT</div>
        <hr />
        <div>
          <Link href={'/'} className={'text-red-700 font-sans hover:underline'}>
            BACK
          </Link>
        </div>
      </div>
    </>
  )
}