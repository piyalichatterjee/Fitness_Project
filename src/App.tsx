import { BrowserRouter, Route, Routes } from "react-router-dom"
import  Home  from "./Pages/home"
import ExerciseDetail from "./Pages/ExerciseDetail"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"



function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

      
    </div>
  )
}

export default App
