import React from 'react'
import UserTable from './UserTable'
import Link from 'next/link';
import { Suspense } from 'react';

interface Props {
    searchParams: Promise<{ sortOrder: string }>;
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;
    
  return (
      <>
      <h1>Users sorted by {sortOrder}</h1>
      <Link href='/users/new' className='btn btn-neutral p-2 mb-2'>New User</Link>
      <Suspense fallback={<p>Loading users...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
      <p className="text-right text-sm italic mt-4 mb-2">as of {new Date().toLocaleString()}</p>
        
      </>
  )
}

export default UsersPage
