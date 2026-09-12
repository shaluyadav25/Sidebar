import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"


const Layout = () => {
  return (
    <>
    <Header/>
    <div className="flex">
          <Sidebar/>
 
    <main className="flex-1  bg-gray-500 text-3xl font-bold text-center p-10">
        <Outlet/>
    </main>
       </div>
    <Footer/>
    </>
  )
}

export default Layout