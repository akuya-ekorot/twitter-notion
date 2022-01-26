import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, loading } = useSession();

  if (session) { console.log(session) };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {session ? <p>{session.user.name}</p> : <p>Not signed in yet</p>}
      <button className="p-4 bg-blue-600 text-white rounded" onClick={() => signIn()}>Authenticate</button>
    </div>
  )
}
