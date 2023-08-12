import DriftIntegration from "./DriftIntegration";


function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Be calm
        </h2>

        <h1 className="text-3xl md:text-6xl lg:text-6xl font-black uppercase mb-8">
          I&apos;m still baking
        </h1>
        {/* This is a single-line comment 
        <div className="text-lg md:text-2xl lg:3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 
        lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          800,000 Memebers
        </div>
        
        <form action="#" method="post" target="_blank" rel="noreferrer">
          <div className="flex flex-col md:flex-row justify-center mb-4">
            <input placeholder="E.g info@arudivalentine.com"
              type="email"
              name="memeber[email]"
              className="text-lg md:text-2xl placeholder:text-gray-400 
              placeholder-italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white 
              bg-opacity-10 focus:bg-opacity-20 duration:150 rounded-full 
            md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0 outline-none"/>

              <input 
                type="submit" 
                value="Join today"
                name="memeber[subscribe]"
                className="bg-primary rounded-full md:rounded-tl-none
                md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px-10 
                lg:py-6 lg:px-12 cursor-pointer hover:opacity-75 duration:150"/>
          </div>
          
          <div className="opacity-50 italic">
            We hate spam as much as you do and promise to never share your email.
          </div>
        </form>
        */}
      </main>
      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>Built with <span role="img" aria-label="heart">❤️</span> by <a href="https://github.com/arudivalentine" target="_blank" rel="noreferrer">Arudi Valentine</a></p>

        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">About Me</a> |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
