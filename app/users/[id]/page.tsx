import React from 'react'
import page from '../page'

interface Props {
    params: Promise<{ id: number }>;
}

const UserDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  return <div>UserDetailPage {id}</div>
}

export default UserDetailPage
