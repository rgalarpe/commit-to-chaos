import React from 'react'
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ id: string }>;
}

const UserDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  if(parseInt(id) > 10) notFound();
  return <div>UserDetailPage {id}</div>
}

export default UserDetailPage