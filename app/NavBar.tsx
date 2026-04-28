'use client'
import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react'
import Loading from './loading'

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className='flex bg-neutral p-3 space-x-3'>
      <Link href='/' className='mr-5'>Next.js</Link>
      <Link href='/users' className='mr-5'>Users</Link>
      {status === 'loading' && <Loading />}
      {status === 'authenticated' && <div>Hello {session.user!.name!.split(' ')[0]}
        <Link href='/api/auth/signout' className='ml-5'>Sign Out</Link></div>}

      {status === 'unauthenticated' && (
        <Link href='/api/auth/signin' className='mr-5'>Sign In</Link>
      )}
    </div>
  )
}

export default NavBar
