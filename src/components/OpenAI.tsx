import Image from 'next/image'

const OpenAI = () => {
  return (
    <main className="lg:ml-24 flex lg:grid lg:grid-cols-2 max-sm:flex-col">
      <div className="flex">
            <Image
              src="/possibility.png"
              width={600}
              height={200}
              alt="Picture of the author"
              />
      </div>
      <div className="flex flex-col text-left lg:mt-24 max-sm:ml-10 max-sm:mt-8">
              <span className="text-sm text-indigo-600">Request Early Access to Get Started</span>
              <span className="text-5xl pr-28 max-sm:text-4xl mb-6 pb-4 bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold inline-block text-transparent bg-clip-text">
                The possibilities are beyond your imagination
              </span>
              <span className="text-sm text-contentTextColor">
                Yet bed any for travelling assistance indulgence unpleasing. Not 
                <br />
                thoughts all exercise blessing. Indulgence way everything joy 
                <br />
                alteration boisterous the attachment. Party we years to order 
                <br />
                allow asked of.</span>
              <span className="text-sm text-buttonBackground mt-4">
                Request Early Access to Get Started
              </span>
      </div>
    </main>
  ) 
}

export default OpenAI