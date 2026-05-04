import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './users/components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import moonpic from '../public/images/moon.jpg'

export default async function Home() {
  return (
    <main>
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
    </main>
  )
}
