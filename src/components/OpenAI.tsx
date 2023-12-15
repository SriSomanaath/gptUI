import Image from 'next/image'

const OpenAI = () => {
  return (
  <main>
    <div className="lg:ml-24 flex lg:grid lg:grid-cols-2 max-sm:flex-col">
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
    </div>
    <div className="p-6 lg:grid lg:grid-cols-2 justify-between rounded-lg bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom mt-10 flex max-sm:flex-col ml-24 mr-24">
        <div className="flex-grow">
          <h6 className="text-sm">Request Early Access to Get</h6>
          <h2 className="text-2xl font-bold">Register today & start exploring the endless possibilities.</h2>
        </div>
        <div className="mt-4 flex lg:items-center lg:justify-end">
          <button className="bg-black rounded-full text-white pl-6 pr-6 pt-2 pb-2 text-sm">
            Get Started
          </button>
        </div>
      </div>
    </main>
  ) 
}

export default OpenAI