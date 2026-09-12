import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App