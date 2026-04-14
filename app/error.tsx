'use client';
import React from 'react'

interface Props{
    error: Error;
    reset: ()=> void;
}

const ErrorPage = ({error}: Props) => {
    console.log('Error ',error);
  return (
    <>
        <div>An unexpected error has occured.</div>
        <button className='btn bg-neutral text-white border-none hover:bg-pink-600 rounded-2xl px-6 py-2 mt-2' onClick={()=>reset()}>Retry</button>
    </>
    
  )
}

export default ErrorPage
