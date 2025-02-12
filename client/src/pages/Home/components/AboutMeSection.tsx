import { Link } from "react-router-dom";

const AboutMeSection = () => {
  return (
    <div className="flex w-full mb-60">
        <div className="flex w-full mt-36 my-96 mx-32">
            <div className="flex font-bold text-8xl h-full w-full">ABOUT ME</div>
            <div className="flex flex-col h-full w-full">
                <h1 className="text-4xl font-fira text-yellow-300">I am a Junior Web Developer</h1>
                <p className="font-fira text-lg text-neutral-400">I am a junior web developer looking for exciting oppurtunities. 
                Has Electronics and Communication Engineering background. Passionate Curious about solving problems.
                Skilled on MERN Stack. Learning more to improve skill.</p>
                <Link to={"/about"} target="_parent" className="flex items-center">
                    <div className="relative text-xl px-1 pb-1 cursor-pointer mt-20">
                        <h1 className="flex flex-shrink-0 items-center gap-2  text-pink-700 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-pink-700 before:w-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full ">MORE ABOUT ME <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                        </h1>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default AboutMeSection;