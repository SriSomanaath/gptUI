

const NavBar = () => {
  return (
    <div>
      <div className="flex flex-row w-full p-16 justify-between">
        <ul className="text-white flex flex-row space-x-6">
          <li>GPT-3</li>
          <li>Home</li>
          <li>What is GPT?</li>
          <li>Open AI</li>
          <li> Case Studies</li>
          <li>Library</li>
        </ul>
            <div className="flex space-x-6">
              <button className="text-white">
                Sign in 
              </button>
              <button className="text-white bg-buttonBackground pt-2 pr-6 pl-6 pb-2 rounded-sm">
                Sign up
              </button>
            </div>
      </div>
    </div>
  )
}

export default NavBar