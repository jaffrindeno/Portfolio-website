import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
    </>
    
  )
}

export default App;