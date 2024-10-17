import Link from "next/link"
import { FC } from "react"



const Button :FC<{text:string; link:string}> = ({text , link }) => {
  return (    <Link href={link} passHref>

    <button
     className=" hover:scale-110 shadow-lg rounded-full bg-[#FFEEAD] py-4 
      px-7  text-xl font-semibold  text-[#0B192C] duration-300" >
        
    {text}
    
    </button>
    </Link>
  );
};

export default Button