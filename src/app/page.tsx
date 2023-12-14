import Image from 'next/image'

import { About,  Blog,  Content,  Footer,  Hero,  NavBar,  OpenAI} from "@/components"

export default function Home() {
  return (
    <main className="bg-gradient-to-l from-appBackgroundTo via-appBackgroundTo to-appBackgroundFrom">
      <NavBar />
      <Hero />
      <About />
      <Content />
      <OpenAI />
      <Blog />
      <Footer />
    </main>
  )
}
