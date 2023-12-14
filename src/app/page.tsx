import Image from 'next/image'

import { About,  Blog,  Content,  Footer,  Hero,  NavBar,  OpenAI} from "@/components"

export default function Home() {
  return (
    <main className="bg-sky-950">
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
