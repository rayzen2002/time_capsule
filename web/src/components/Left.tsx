import { Background } from './Background'
import Copyright from './Copyright'
import Hero from './Hero'
import Signin from './Signin'

export default function Left() {
  return (
    <div className="relative flex flex-col items-start justify-between overflow-hidden border-white/10 bg-[url(../assets/stars.svg)] bg-cover p-16 px-28 py-16">
      {/* Blur */} {/* Stripes */}
      <Background />
      {/* SignIn */}
      <Signin />
      {/* Hero */}
      <Hero />
      {/* Copyright */}
      <Copyright />
    </div>
  )
}
