import { cookies } from 'next/headers'
import Left from '@/components/Left'
import Right from '@/components/Right'
export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <Left />
      {/* Right */}
      <Right />
    </main>
  )
}
