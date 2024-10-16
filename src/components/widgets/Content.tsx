import Wrapper from "@/components/shared/Wrapper";
import ShortImg from "@/assets/images/shortimg.png";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";




const Content = () => {
  return (
    <section >
        <Wrapper>

        <div className=" px-32 ml-8 custom-line  h-0.5 md:m-4 md:px-6 md:ml-28 md:mr-28 bg-gray-300 "></div>     
    
          <div className=" py-3  ml-4px text-3xl text-gray-200 font-bold md:text-4xl text-center md:ml-16 md:py-4 md:px-20">   
                  
           <h1 >SKILLS</h1>
                </div>

                {/* main div */}
                <div className=" px-10 py-2 md:flex flex-row md:px-52 md:py-4">
                  
 {/* skills */}
                
<div className="text-gray-100 text-xl font-semibold">
  <ul>
    <li className="flex items-center space-x-2">
      <IoIosCheckmarkCircle />
      <span>HTML</span>
    </li>
    <li className="flex items-center space-x-2">
      <IoIosCheckmarkCircle />
      <span>CSS</span>
    </li>
    <li className="flex items-center space-x-2">
      <IoIosCheckmarkCircle />
      <span>TailwindCSS</span>
    </li>
    <li className="flex items-center space-x-2">
      <IoIosCheckmarkCircle />
      <span>NEXTjs</span>
    </li>
    <li className="flex items-center space-x-2">
      <IoIosCheckmarkCircle />
      <span>Typescript</span>
    </li>
  </ul>
</div>

                 {/* paragraph div */}
           <div className="mt-7 ml-4  w-96 md:flex-1 md:mt-40  md:-ml-40 font-medium  text-[20px]  text-gray-300  ">
                <p>I specialize in building responsive, modern websites using HTML, CSS, Tailwind CSS, and 
            TypeScript. With experience in Next.js and Node.js, I can create full-stack, high-performance web applications.
          </p>
            </div>


                {/* image div */}
                   <div className=" ml-9 w-80 md:flex-1 md:-mt-13 md:ml-44">
                 <Image src={ShortImg} alt="WEBdev image"  className=" bg-cover size-80 " ></Image> 
                 </div> 

                

            </div>
        </Wrapper>
    </section>
  )
}

export default Content