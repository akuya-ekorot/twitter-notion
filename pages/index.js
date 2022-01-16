import Link from "next/link";
import prepareAuthUrl from "../lib/prepareAuthUrl";

export default function Home() {
  const url = prepareAuthUrl();
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Link
        href={url}
        passHref
      ><a className="p-4 bg-blue-600 text-white rounded">Authenticate</a>
      </Link>
    </div>
  )
}
