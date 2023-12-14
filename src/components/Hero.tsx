import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
  <main>
    <div  className="flex min-h-screen flex-row items-center justify-between pr-24 pl-24 pt-24 pb-0 justify-between">
        <div className="text-white text-left">
          <h1 className="text-6xl mb-6 bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold inline-block text-transparent bg-clip-text" >Let's Build Something<br/>Amazing with GPT-3<br/>OpenAI</h1>
          <p className="text-contentTextColor">Yet bed any for travelling assistance indulgence unpleasing.<br/>Not thoughts all exercise blessing. Indulgence way <br/> everything joy alteration boisterous the attachment. Party <br/> we years to order allow asked of.</p>
          <div>
            <div className="flex rounded-lg shadow-sm mt-6">
                <input
                  type="text"
                  value="Your  Email Address"
                  className="py-3 px-4 block w-full bg-inputBoxColor text-contentTextColor border-gray-200 shadow-sm rounded-s-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                <button
                  type="button"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-sm border border-transparent bg-buttonBackground text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 whitespace-nowrap"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="flex relative top-8">
            <Image
                src="/people.png"
                width={200}
                height={50}
                alt="Picture of the author"
              />
              <h1 className="text-white pl-4 mt-2">1,600 people requested access a visit in last 24 hours</h1>
            </div>
        </div>
        <div>
        <Image
          src="/ai.png"
          width={600}
          height={1000}
          alt="Picture of the author"
        />
        </div>
    </div>
    <div  className="flex flex-row items-center space-x-6 pl-24 justify-center">
          <div><Image src="/google.png" width={100} height={5} alt="Picture of the author" /></div>
          <div><Image src="/slack.png" width={100} height={5} alt="Picture of the author" /></div>
          <div><Image src="/atlassian.png" width={100} height={5} alt="Picture of the author" /></div>
          <div><Image src="/dropbox.png" width={100} height={5} alt="Picture of the author" /></div>
          <div><Image src="/shopify.png" width={100} height={5} alt="Picture of the author" /></div>
    </div>
    </main>
  )
}

export default Hero