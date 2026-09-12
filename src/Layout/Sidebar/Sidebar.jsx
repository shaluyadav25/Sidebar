import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <>
    <div className="flex">
        <aside className="w-65 min-h-screen p-5 bg-gray-900 text-2xl text-white">
           <h1 className="text-3xl font-semibold m-1"> My Dashboard</h1>
           <div className="m-7 space-y-7">
            <Link to="/"  className="block hover:border-2  hover:border-gray-400 hover:rounded-2xl p-3 hover:text-center hover:font-medium hover:bg-gray-500 hover:text-black" >Home</Link>
            <Link to="/about" className="block hover:border-2  hover:border-gray-400 hover:rounded-2xl p-3 hover:text-center hover:font-medium hover:bg-gray-500 hover:text-black">About</Link>
            <Link to="/contact"  className="block hover:border-2  hover:border-gray-400 hover:rounded-2xl p-3 hover:text-center hover:font-medium hover:bg-gray-500 hover:text-black" >Contact</Link>

           </div>

        </aside>
    </div>
    </>
  )
}

export default Sidebar