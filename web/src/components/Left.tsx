import { cookies } from 'next/headers'
import { Background } from './Background'
import Copyright from './Copyright'
import Hero from './Hero'
import Signin from './Signin'
import Profile from './Profile'

export default function Left() {
  const isAuthenticated = cookies().has('token')
  return (
    <div className="relative flex flex-col items-start justify-between overflow-hidden border-white/10 bg-[url(../assets/stars.svg)] bg-cover p-16 px-28 py-16">
      {/* Blur */} {/* Stripes */}
      <Background />
      {/* SignIn */}
      {isAuthenticated ? <Profile /> : <Signin />}
      {/* Hero */}
      <Hero />
      {/* Copyright */}
      <Copyright />
    </div>
  )
}
