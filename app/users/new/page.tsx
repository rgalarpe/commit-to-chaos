'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const NewUsersPage = () => {
  const router = useRouter();

  return (
    <div>
      <button className='btn bg-neutral text-white border-none hover:bg-pink-600 rounded-2xl px-6 py-2' 
      onClick={() => router.push('/users')}>
        Create User
      </button>
    </div>
  )
}

export default NewUsersPage