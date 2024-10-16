import Wrapper from "@/components/shared/Wrapper"
import { FaGithub } from "react-icons/fa6";

import { IoLogoVercel,IoLogoLinkedin } from "react-icons/io5";



const footer = () => {
  return (<Wrapper>


    <footer 
    className="bg-gray-800 text-white w-full h-48 py-8 mt-4">
  <div className="container mt-10 flex flex-col md:flex-row justify-between items-center">

    {/* <!-- Social Media Links --> */}
    <div className=" px-[50%] flex space-x-5 ">
    <IoLogoVercel className="size-4 -mr-3 mt-1  "/>
    <a href="https://twitter.com" className="hover:text-gray-400 hover:scale-110">Vercel</a>
     <FaGithub className="size-5 "/>
     <a href="https://github.com/SaraRajput21" className="hover:text-gray-400 hover:scale-110">GitHub</a>
     <IoLogoLinkedin className="size-5 "/>
     <a href="www.linkedin.com/in/sararajput" className="hover:text-gray-400 hover:scale-110 ">LinkedIn</a>
    </div>
  </div>

  {/* <!-- Copyright --> */}
  <div className="  md:text-center md:mt-4 text-gray-500">
    &copy; 2024 My Portfolio. All rights reserved.
  </div>
</footer>

    </Wrapper>
  )
}

export default footer