'use client'
import Image from 'next/image'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
  ssr: false, // don't render on server
  loading: () => <p>Loading...</p> // show while loading
});


export default function Home() {
  // declare a const useState isVisible and setVisible for the the HeavyComponent and onclick button setVisible to true and render the HeavyComponent only if isVisible is true
  const [isVisible, setVisible] = useState(false);
  const [items, setItems] = useState<number[]>([]);

  const handleClick = async () => {
    const _ = (await import('lodash')).default;
    const sorted = _.orderBy([3, 1, 2], [], ['asc']);
    setItems(sorted);
  }

  return (
    <main>
      <button className='btn bg-neutral 
      text-white border-none hover:bg-pink-600 rounded-2xl px-6 py-2 mt-2 ml-2'
        onClick={() => setVisible(true)}>Show Heavy Component</button>
      {isVisible && <HeavyComponent />}
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1504625709867-b4e45e3bb9dd?q=60&auto=format&fit=max"
          alt="Description of your image"
          fill
          className="object-cover"
          loading="eager"
          priority
        />

      </div>
      <button
        className='btn bg-neutral text-white border-none hover:bg-pink-600 rounded-2xl px-6 py-2 mt-2 ml-2'
        onClick={handleClick}>
        Load Lodash
      </button>
      <p>{items.toString()}</p>

    </main>
  )
}
