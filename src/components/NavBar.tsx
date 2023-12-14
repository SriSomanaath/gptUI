"use client";

import Image from 'next/image'
import React, { useState } from 'react'

import { Link } from "react-scroll";

const NavBar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () =>  setClick(!click)
  
  return (
    <>
    <header>
      <nav >
        <div className="flex text-white px-6 lg:px-20 lg:pt-10">
          <div className="flex items-center flex-1">
            <h1 className='text-3xl font-bold sm:p-4 max-sm:top-8 max-sm:absolute'>GPT-3</h1>
            <ul className="lg:flex text-center lg:flex-row max-sm:hidden sm:hidden md:hidden lg:space-x-6 relative lg:left-6 lg:-top-0 sm:top-4 max-sm:top-4">
              <Link spy={true} smooth={true} to="SHOP"><li>Home</li></Link>
              <Link spy={true} smooth={true} to="ABOUT"><li>What is GPT?</li></Link>
              <Link spy={true} smooth={true} to="PRODUCTS"><li>Open AI</li></Link>
              <Link spy={true} smooth={true} to="SERVICES"><li>Case Studies</li></Link>
              <Link spy={true} smooth={true} to="CAREERS"><li>Library</li></Link>
            </ul>
          </div>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal max-sm:pr-2">
          <button onClick={handleClick} className="lg:hidden absolute right-4 top-2 mt-2">
                {click ? 
                  <Image
                  src='/close.png'
                  width={40}
                  height={2}
                  className='ml-2 cursor-pointer'
                  alt='close menu'
                />
                :
                <Image
                src='/menu.png'
                width={40}
                height={2}
                className='ml-2 cursor-pointer'
                alt='open menu'
              />
                }
          </button>
              <div className={`lg:flex lg:flex-row ${click ? '' : 'max-sm:hidden sm:hidden md:hidden'} relative right-4 lg:space-x-6 sm:top-8 max-sm:top-8 max-sm:grid sm:grid-cols-2`}>
                  <ul className={`${click ? '' : ' lg:flex text-center lg:flex-row lg:hidden'}`}>
                  <Link spy={true} smooth={true} to="SHOP"><li>Home</li></Link>
                  <Link spy={true} smooth={true} to="ABOUT"><li>What is GPT?</li></Link>
                  <Link spy={true} smooth={true} to="PRODUCTS"><li>Open AI</li></Link>
                  <Link spy={true} smooth={true} to="SERVICES"><li>Case Studies</li></Link>
                  <Link spy={true} smooth={true} to="CAREERS"><li>Library</li></Link>
                </ul>
                <div className=" flex flex-col max-sm:flex max-sm:flex-col sm:flex sm:flex-row lg:relative lg:-top-7">
                  <button className="text-white lg:mr-2 max-sm:mb-2 sm:mb-0 sm:mr-2 max-sm:text-left">
                    Sign in
                  </button>
                  <button className="text-white bg-buttonBackground lg:pt-2 lg:pr-6 lg:pl-6 lg:pb-2 rounded-sm max-sm:mt-2 sm:mt-0 max-sm:text-left">
                    Sign up
                  </button>
                </div>
              </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default NavBar