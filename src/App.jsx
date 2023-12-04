import './style.css'


function App() {


  return (
    <div className=" bg-white h-screen flex items-center justify-center">
    
    <div className="relative mt-8 w-80">

    
    <input className="border-2 border-gray-500 p-3 w-full
     rounded-md outline-none  focus:border-indigo-600 animated-text

     focus:shadow-outline
     " placeholder="johndoe@gmail.com" type="text" />
     
     
     <div className="text-black absolute top-0 translate-y-3 translate-x-3
     pointer-events-none px-2 origin-top-left bg-white
     ">Email</div>

     </div>
    </div>
  )
}

export default App
