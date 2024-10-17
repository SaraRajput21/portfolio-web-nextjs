import Link from "next/link"
import Logo from "/public/logo.png"
import Image from "next/image"
import Wrapper from "@/components/shared/Wrapper"


const Header = () => {
  return (<Wrapper>
    <header className=" flex flex-col md:flex-row  justify-between  px-4 py-3 bg-gray-950 text-gray-100 sticky top-0 items-center">
        {/* logo */}
        <div >
        < Image src={Logo} alt="webdev logo" className="bg-cover h-13 -mt-3 size-20 w-32 md:size-25" />
        </div>
        {/*navigation bar  */}

        <ul className="flex space-x-8 font-medium">
            <li>
              <Link href={"/"}>
             Home
            </Link>
              
              </li>
            <li>
            <Link href={"/projects"}>
            Projects
            </Link>
              
            </li>
            <li>
            <Link href={"/contact"}>
            Contact
            </Link>
            </li>

            
        </ul>
 


    </header>
    </Wrapper>
  )
}

export default Header