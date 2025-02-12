
import AboutMeSection from "./components/AboutMeSection";
import Capabilities from "./components/Capabilities";
import Topbar from "./components/Topbar";


const AboutPage = () => {
  return (
    <div className="flex bg-black w-full justify-center">
      <div className="h-full w-3/4 bg-zinc-950 text-white flex flex-col">
        <Topbar />
        <AboutMeSection />
        <hr className="mt-32 bg-yellow-300 h-0.5 border-none"/>
        <Capabilities />
      </div>
    </div>
  )
}

export default AboutPage;