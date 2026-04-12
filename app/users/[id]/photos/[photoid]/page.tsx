import React from 'react'
import page from '../../page'

interface Props {
    params: Promise<{ id: number, photoid: number }>
}

const PhotoPage = async ({ params }: Props) => {
  const { id, photoid } = await params;
  return (
    <div>PhotoPage {id} - {photoid}</div>
  )
}

export default PhotoPage
