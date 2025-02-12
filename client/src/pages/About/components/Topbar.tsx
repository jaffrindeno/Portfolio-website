import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="flex">
        <div className="flex w-full items-center">
            <p className="font-fira text-white/50 text-2xl mt-4 ml-10">JAFFRIN DENO</p>
        </div>
        <div className="flex w-full items-center justify-end">
            <Link to={"/"}>
              <p className="mr-24 font-fira text-end text-gray-300 text-xl mt-4 bg-zinc-800 px-4 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer">Home</p>
            </Link></div>
        
    </div>
  )
}

export default Topbar;