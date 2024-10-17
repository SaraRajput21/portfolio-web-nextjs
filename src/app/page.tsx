import Hero from "@/components/widgets/Hero";
import Content from "@/components/widgets/Content";
import AllProjects from "@/app/projects/page";
import EmailSection from "@/app/contact/page"

export default function Home () {
  
  
  return (
    <main>
      
    {/* Hero section */}
    <Hero/>
    {/* content section */}

    <Content/>

    {/* projects section  */}
     <AllProjects/>

    {/*Email section  */}
    <EmailSection/>



    </main>

    
  )
}

