import Image from 'next/image';

const Blog = () => {
  return (
    <div className="ml-24 mr-24 mt-24 max-sm:ml-10 max-sm:mr-10">
      <div>
        <h1 className="text-5xl pr-28 max-sm:text-4xl mb-6 pb-4 bg-gradient-to-r from-textGradientStart via-textGradientVia to-textGradientFrom font-bold inline-block text-transparent bg-clip-text">
          A lot is happening,
          <br />
          We are blogging about it.
        </h1>
      </div>

        <div className="flex justify-between max-sm:flex-col">
          <div className="flex">
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-AboutBackgroundColor mb-10">
                  <Image src="/blog01.png" width={500} height={100} alt="Picture of the author" />
                    <div className="px-6 py-4 flex">
                      <div className="flex flex-col justify-between">
                        <span className="font-bold text-xs mb-2 text-white">Sep 26, 2021</span>
                        <p className="text-white text-lg font-bold">
                        GPT-3 and OpenAI is the future. Let us explore how it is?
                        </p>
                      </div>
                    </div>
                  <div className="px-6 pt-4 pb-2 flex">
                    <span className="inline-block rounded-full py-1 text-xs font-semibold text-white mr-2 mb-2">
                      Read Full Article
                    </span>
                  </div>
              </div>
          </div>
          <div className="flex max-sm:flex-col ">
            <div className="flex flex-col grid grid-rows-2">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10 max-sm:mr-0 lg:mr-10">
                            <Image src="/blog02.png" width={400} height={50} alt="Picture of the author" />
                            <div className="px-6 py-4 flex bg-AboutBackgroundColor">
                              <div className="flex flex-col justify-between">
                                <span className="font-bold text-xs mb-2 text-white">Sep 26, 2021</span>
                                <p className="text-white text-lg font-bold">
                                GPT-3 and OpenAI is the future. Let us explore how it is?
                              </p>
                                </div>
                            </div>
                            <div className="px-6 pt-4 pb-2 flex bg-AboutBackgroundColor">
                              <span className="inline-block rounded-full py-1 text-xs font-semibold text-white mr-2 mb-2">
                                Read Full Article
                              </span>
                            </div>
                        </div>

                        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                            <Image src="/blog04.png" width={400} height={50} alt="Picture of the author" />
                            <div className="px-6 py-4 flex bg-AboutBackgroundColor">
                              <div className="flex flex-col justify-between">
                                <span className="font-bold text-xs mb-2 text-white">Sep 26, 2021</span>
                                <p className="text-white text-lg font-bold">
                                GPT-3 and OpenAI is the future. Let us explore how it is?
                              </p>
                                </div>
                            </div>
                            <div className="px-6 pt-4 pb-2 flex bg-AboutBackgroundColor">
                              <span className="inline-block rounded-full py-1 text-xs font-semibold text-white mr-2 mb-2">
                                Read Full Article
                              </span>
                            </div>
                        </div>
            </div>
            
            <div className="flex flex-col grid grid-rows-2">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10 max-sm:mr-0 lg:mr-10">
                            <Image src="/blog03.png" width={400} height={50} alt="Picture of the author" />
                            <div className="px-6 py-4 flex bg-AboutBackgroundColor">
                              <div className="flex flex-col justify-between">
                                <span className="font-bold text-xs mb-2 text-white">Sep 26, 2021</span>
                                <p className="text-white text-lg font-bold">
                                GPT-3 and OpenAI is the future. Let us explore how it is?
                              </p>
                                </div>
                            </div>
                            <div className="px-6 pt-4 pb-2 flex bg-AboutBackgroundColor">
                              <span className="inline-block rounded-full py-1 text-xs font-semibold text-white mr-2 mb-2">
                                Read Full Article
                              </span>
                            </div>
                        </div>

                        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                            <Image src="/blog05.png" width={400} height={50} alt="Picture of the author" />
                            <div className="px-6 py-4 flex bg-AboutBackgroundColor">
                              <div className="flex flex-col justify-between">
                                <span className="font-bold text-xs mb-2 text-white">Sep 26, 2021</span>
                                <p className="text-white text-lg font-bold">
                                GPT-3 and OpenAI is the future. Let us explore how it is?
                              </p>
                                </div>
                            </div>
                            <div className="px-6 pt-4 pb-2 flex bg-AboutBackgroundColor">
                              <span className="inline-block rounded-full py-1 text-xs font-semibold text-white mr-2 mb-2">
                                Read Full Article
                              </span>
                            </div>
                        </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Blog;
