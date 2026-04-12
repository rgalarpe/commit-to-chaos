import React from 'react'
import UserTable from './UserTable'

interface Props {
    searchParams: Promise<{ sortOrder: number }>;
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;
    
  return (
      <>
      <h1>Users {sortOrder}</h1>
      <UserTable sortOrder={sortOrder} />
      <p className="text-right text-sm italic mt-4 mb-2">as of {new Date().toLocaleString()}</p>
        
      </>
  )
}

export default UsersPage
