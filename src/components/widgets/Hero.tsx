import React from "react"
import Wrapper from "@/components/shared/Wrapper"
import Banner from "@/assets/images/baner.png"
import Image from "next/image"
import MyPicture from "@/assets/images/mypicture.png"

// Components
import Button from "@/components/shared/Button"

const Hero = () => {
  return (
    <section>
      <Wrapper>
        {/* banner image */}
        <div >
          <Image src={Banner} alt="webBanner" className="bg-cover h-40 md:h-80" />
        </div>

        <div className="flex flex-col md:flex-row px-9  ">

        {/* name paragraph */}
        <div data-aos="zoom-in-up" className=" flex-1  md:py-10 px-2 md:px-20 ">
          <p className="text-amber-600  font-serif  italic text-[14px]   mt-6 md:text-xl">HELLO AND WELCOME ! </p>
          <h1 className="  text-5xl  font-serif font-bold text-white py-1 ">I am <span className="text-amber-500">Sara Rajput </span>
          </h1>
          <p className="mt-3 font-medium break-normal text-[20px] text-gray-200 md:text-xl">A <span className="text-white font-bold">Frontend Focused WebDeveloper</span> building the Frontend of Websites 
           & Web Applications that leads to the success of the overall product.
           </p>
           <p className=" mt-2 font-medium break-normal text-[20px] text-gray-200 md:text-xl">
            As a passionate front-end developer, I specialize in creating visually appealing and responsive websites with a focus on user experience.
            With expertise in <span className="text-yellow-100">HTML, CSS, TypeScript, and frameworks like Tailwind CSS,NEXTjs . </span>
             I bring designs to life with clean, efficient code. I thrive on transforming ideas into interactive and engaging web experiences, constantly seeking to stay updated with the latest web technologies to deliver modern, user-friendly solutions."
           </p>
           {/* button */}
           <div className=" mt-6 ml-16 md:ml-36">
            <Button  text ="Projects" link="/projects"/>
           </div>
        


           {/* <button className=" rounded-1xl mt-6 ml-16 w-24 bg-stone-900  md:ml-36  py-2 px-2 font-bold text-xl text-orange-400 " >Projects</button> */}

        </div>
          
           {/* my picture */}
         <div className="flex-1 ">
            <Image src={MyPicture} alt="FrontendDeveloper" className=" shadow-red-700 bg- bg-cover ml-7 mt-8 py-5 h-[540px] w-34 rounded-full  md:ml-20 md:w-[26rem] md:mb-4
             " />
           </div>

        </div>

        


      </Wrapper>




    </section>
  )
}

export default Hero