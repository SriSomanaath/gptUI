import React from 'react'

const About = () => {
  return (
    <main className="bg-AboutBackgroundColor m-24 max-sm:m-12">
      <div className="flex justify-between max-sm:flex-col">
        <div>
          <hr className="w-16 bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom p-0.5 mt-10 ml-6"></hr>
          <h1 className="text-white pl-6 pt-4 font-bold">What is GPT-3</h1> 
        </div>
        <p className="p-6 text-contentTextColor">We so opinion friends me message as delight. Whole front do of plate heard oh ought. His
          <br />
           defective nor convinced residence own. Connection has put impossible own apartments
           <br />
            boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className="flex justify-between pt-20 pl-6 pr-6 max-sm:flex-col">
        <h1 className="text-5xl max-sm:text-4xl mb-6 pb-4 bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold inline-block text-transparent bg-clip-text">The possibilities are beyond <br />your imagination</h1>
        <h6 className=" text-sm pr-4 bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold inline-block text-transparent bg-clip-text">Explore The Library</h6>
      </div>
      <div className="lg:flex lg:grid lg:grid-cols-3">
            <div className="flex justify-between flex-col ">
                    <div>
                      <hr className="w-16 bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom p-0.5 mt-10 ml-6"></hr>
                      <h1 className="text-white pl-6 pt-4 font-bold">Chatbots</h1> 
                    </div>
                    <div>
                    <p className="p-6 text-contentTextColor">We so opinion friends me message as 
                    <br />
                    delight. Whole front do of plate heard oh 
                    <br />
                    ought.
                    </p>
                    </div>
            </div>
            <div className="flex justify-between flex-col">
                      <div>
                        <hr className="w-16 bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom p-0.5 mt-10 ml-6"></hr>
                        <h1 className="text-white pl-6 pt-4 font-bold">Knowledgebase</h1> 
                      </div>
                      <p className="p-6 text-contentTextColor">
                      At jointure ladyship an insisted so humanity
                      <br /> he. Friendly bachelor entrance to on by. As 
                      <br />
                      put impossible own apartments b
                      </p>
            </div>
            <div className="flex justify-between flex-col">
                      <div>
                        <hr className="w-16 bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom p-0.5 mt-10 ml-6"></hr>
                        <h1 className="text-white pl-6 pt-4 font-bold">Education</h1> 
                      </div>
                      <p className="p-6 text-contentTextColor">
                      At jointure ladyship an insisted so humanity
                      <br /> 
                      he. Friendly bachelor entrance to on by. As 
                      <br />
                      put impossible own apartments b
                      </p>
            </div>
      </div>
    </main>
  )
}

export default About