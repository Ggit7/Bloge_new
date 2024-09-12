'use client'

import { useAuth } from "@/lib/context/AuthContext"
import { Users } from "lucide-react";
import Link from "next/link";

export default function Button() {
  const {
    user,
    isLoading,
    error,
    handleSignIn,
    handleSignOut,
  } = useAuth();
  if (user) {
    return (
      <div className=" flex gap-4 item-center ">
          <Link href='/admin'>
        <div className="flex bg-blue-100 px-3 py-2 rounded-xl">
        
          {/* <img className="object-cover h-12 w-12 rounded-full " src={user?.photoUrl} alt="user"/> */}
          <div>
            <h1 className="font-bold">{user?.displayName}</h1>
            <h1 className="text-sm text-gray-500">{user?.email}</h1>
          </div>
        </div> 
        </Link>
        <button
          onClick={handleSignOut}
          className=" bg-gray-900 text-white px-4 py-2 rounded-xl">
          Logout
        </button>

      </div>
    )
  }
  return (
    <section>
      <button
        onClick={handleSignIn}
        className='bg-gray-900 text-white px-4 py-2 rounded-xl'>
        Login
      </button>
    </section>
  );
}
