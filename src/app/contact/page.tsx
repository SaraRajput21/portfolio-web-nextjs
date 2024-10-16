import Wrapper from "../../components/shared/Wrapper"



const EmailSection = () => {
  return (<Wrapper>
    <div>
    <div className="custom-line px-40 h-0.5 m-4 md:w-auto md:ml-28 md:mr-28 bg-gray-300 "></div>
<h1 className=" text-3xl md:text-4xl text-center font-bold text-gray-200 mb-8">Contact</h1>
<section className="flex md:flex-row my-12 md:my-12 py-24  px-48 space-x-48">
<div className="sm:-mt-5">
    <h5 className="text-xl font-bold  text-white my-2">
        Let's Connect
    </h5>
    <p className="text-[#ADB7BE] md:mb-4 md:max-w-md w-64 ">
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best
        to get back to you!
    </p>
</div>
<div>
    <form className="flex flex-col  ">
        {/* email */}
        <div className="mb-6">
        <label htmlFor="email" className="text-white font-medium block mb-2 text-lg">Your email</label>
         <input type="email" 
         id="email" required 
         className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-72 p-2.5 "
         placeholder="joe@gmail.com"/>
         </div>

        {/* subject */}
         <div className="mb-6">
        <label htmlFor="Subject" className="text-white font-medium block mb-2 text-lg">Subject</label>
         <input type="text" 
         id="Subject" required 
         className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-72 p-2.5 "
         placeholder="just say Hii!"/>
         </div>
      {/*message  */}
        <div className="mb-6">
            <label 
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium">
                Message
            </label>
            <textarea 
            name="message"
            id="message"
         className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-72 p-2.5 "
            placeholder="Let's talk about..."/>
        </div>
        <button
        type="submit"
         className="bg-purple-500 hover:bgpurple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Message</button>










    </form>
</div>

</section>
</div>
</Wrapper>
  )
}

export default EmailSection