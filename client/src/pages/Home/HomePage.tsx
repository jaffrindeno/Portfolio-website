import AboutMeSection from "./components/AboutMeSection";
import IntroSection from "./components/IntroSection";
import ProjectSection from "./components/ProjectSection";
import Topbar from "./components/Topbar";

const HomePage = () => {
  return (
    <div className="flex bg-black w-full justify-center">
      <div className="h-full w-3/4 bg-zinc-950 text-white flex flex-col">
        <Topbar />
        <IntroSection />
        <hr className="mt-32 bg-yellow-300 h-0.5 border-none"/>
        <ProjectSection />
        <hr className="mt-32 bg-yellow-300 h-0.5 border-none"/>
        <AboutMeSection />
      </div>
    </div>
    
  )
}

export default HomePage;