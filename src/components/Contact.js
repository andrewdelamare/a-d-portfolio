export const Contact = () => {
  return (
    <div className="grid grid-cols-2 gap-9 mt-64 mb-64 pt-32 mx-auto w-4/5 text-xl" id="contact">
      <h2 className="text-4xl pb-5 col-span-2">Contact</h2>
      <p className="font-serif self-center text-justify w-9/10">
        I'm always interested in new projects and opportunities, so if you'd like to work with me or build something cool with my help please get in touch!
        I'm especially interested in open source, so if you have a project you'd like some help with please send me an email with details and a link to your remote repository.
      </p>
      <span></span>
      <div className="flex justify-between">
        <h3 className="text-2xl self-center">Send me a message</h3>
        <a className=" flex font-serif mt-2 w-fit p-2 border-black border-4 rounded-xl shadow-xl hover:bg-blue-101 hover:text-white hover:scale-95 active:scale-90 active:bg-blue-103 duration-100 transition-all ease-in-out" href="mailto:contact@andrewdelamare.dev">contact@andrewdelamare.dev</a>
      </div>
      
    </div>  
  )
}