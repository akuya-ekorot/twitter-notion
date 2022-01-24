import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Link
        href="/api/prep-auth-link"
        passHref
      ><a className="p-4 bg-blue-600 text-white rounded">Authenticate</a>
      </Link>
    </div>
  )
}
