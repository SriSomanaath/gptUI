import Image from 'next/image'

import { About,  Blog,  Content,  Footer,  Hero,  NavBar,  OpenAI} from "@/components"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-appBackgroundTo to-appBackgroundFrom dark:from-appBackgroundFrom to-appBackgroundTo">
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
