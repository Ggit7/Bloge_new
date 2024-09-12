import { Home,Book, Contact } from 'lucide-react'
import React from 'react'
import Button from '../Button'
import AuthContextProvider from '@/lib/context/AuthContext'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <nav className='flex justify-between item-center px-7 py-3 border-b'>
        <Link href={"/"}>
        <h1 className='text-3xl font-bold text-gray-900'>
            DelyBloge</h1>
            </Link>
<ul className='flex gap-6 item-center py-2'>
  <Link href={"/"}>
    <li className='flex item-center gap-2'>
        <Home/>
        Home
    </li>
    </Link>
    <li className='flex item-center gap-2'>
        <Book/>
        Blogs
    </li>
    <li className='flex item-center gap-2'>
        <Contact/>
        Contact
    </li>
</ul>
<AuthContextProvider>
 <Button/>
</AuthContextProvider>

      </nav>
    </>
  )
}
