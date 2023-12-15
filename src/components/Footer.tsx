import React from 'react'

const Footer = () => {
  return (
      <main className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col">
              <span className="text-6xl max-sm:text-5xl text-center mb-6 bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold inline-block text-transparent bg-clip-text">
                Do you want to step into the 
                <br />
                future before others
              </span>
              <span className="text-center border-white">
              <button className="text-white ">Request Early Access</button>
              </span>
            </div>
            <div className="flex lg:flex-row max-sm:flex-col">
                <div className="flex lg:flex-row lg:mt-20 justify-around lg:space-x-20 space-x-6 max-sm:grid">
                  <div className="flex flex-col max-sm:mb-10 max-sm:items-center max-sm:mt-10">
                    <span className="text-5xl font-bold text-white">GPT-3</span>
                    <span className="text-white">
                      Crechterwoord K12 182 DK
                      <br />
                      Alknjkcb, All Rights Reserved
                    </span>
                  </div>
                  <div className="flex max-sm:space-x-4 lg:space-x-28">
                    <div>
                      <div className="flex flex-1 justify-between lg:gap-6 gap-4 flex-wrap">
                        <div>
                          <h4 className="font-montserrat text-lg lg:text-2xl leading-normal font-medium mb-2 lg:mb-6 text-white">
                            Links
                          </h4>
                          <ul>
                            <li className="mt-2 lg:mt-3 font-montserrat text-sm lg:text-base leading-normal text-white-400 text-white">Over ons</li>
                            <li className="mt-2 lg:mt-3 font-montserrat text-sm lg:text-base leading-normal text-white-400 text-white">Sociale media</li>
                            <li className="mt-2 lg:mt-3 font-montserrat text-sm lg:text-base leading-normal text-white-400 text-white">Counters</li>
                            <li className="mt-2 lg:mt-3 font-montserrat text-sm lg:text-base leading-normal text-white-400 text-white">Contact</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-1 justify-between lg:gap-6 gap-4 flex-wrap">
                        <div>
                          <h4 className="font-montserrat text-lg lg:text-2xl leading-normal font-medium mb-2 lg:mb-6 text-white">
                            Company
                          </h4>
                          <ul>
                            <li className="mt-2 lg:mt-3 font-montserrat text-sm lg:text-base leading-normal text-white-400 text-white">Terms & Conditions</li>
                            <li className="mt-2 lg:mt-3 font-montserrat text-sm lg:text-base leading-normal text-white-400 text-white">Privacy Policy</li>
                            <li className="mt-2 lg:mt-3 font-montserrat text-sm lg:text-base leading-normal text-white-400 text-white">Contact</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-1 justify-between lg:gap-6 gap-4 flex-wrap">
                        <div>
                          <h4 className="font-montserrat text-lg lg:text-2xl leading-normal font-medium mb-2 lg:mb-6 text-white">
                            Get in touch 
                          </h4>
                          <ul>
                            <li className="mt-2 lg:mt-3 font-montserrat text-sm lg:text-base leading-normal text-white-400 text-white">
                              Crechterwoord K12 
                              <br />
                              182 DK Alknjkcb
                            </li>
                            <li className="mt-2 lg:mt-3 font-montserrat text-sm lg:text-base leading-normal text-white-400 text-white">085-132567</li>
                            <li className="mt-2 lg:mt-3 font-montserrat text-sm lg:text-base leading-normal text-white-400 text-white">info@payme.net</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

      </main>

  )
}

export default Footer