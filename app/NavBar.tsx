import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-neutral p-3 space-x-3'>
      <Link href='/' className='mr-5'>Next.js</Link>
      <Link href='/users' className='mr-5'>Users</Link>
      <Link href='/api/auth/signin' className='mr-5'>Sign In</Link>
    </div>
  )
}

export default NavBar
