import React from 'react'

interface Props {
    children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <aside className='bg-info-content p-5 mr-5'>Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  )
}

export default AdminLayout
