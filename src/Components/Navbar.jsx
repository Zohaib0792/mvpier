import { Link } from 'react-router-dom';


function Navbar() {
    return(
    
<div className=" fixed flex p-3 justify-between  items-center w-full bg-blue-500  z-20">
  
  {/* Logo */}
  <h1 className="text-white font-bold text-2xl">TechHub Store</h1>

  {/* Center Links */}
  <nav className="flex  gap-8">
    <Link to="/" className="text-lg font-medium py-3 px-4 text-center rounded-xl   hover:bg-white/30  text-white transition-all duration-200 hover:text-blue-900">Home</Link>
    <Link to="/about " className="text-lg font-medium py-3 px-4 text-center rounded-xl   hover:bg-white/30 text-white transition-all duration-200 hover:text-blue-900">Products</Link>
    <Link to="/services" className="text-lg font-medium py-3 px-4 text-center rounded-xl   hover:bg-white/30  text-white transition-all duration-200  hover:text-blue-900">About</Link>
    <Link to="/contact" className="text-lg font-medium py-3 px-4 text-center rounded-xl   hover:bg-white/30  text-white transition-all duration-200  hover:text-blue-900">Contact</Link>
    
  

  </nav>

  {/* Right side */}
  
    {/* Button or other content */}
    <button className=" bg-white p-2 rounded-lg text-blue-500 hover:text-blue-800">Get Started</button>
  

</div>
    )
    
}
export default Navbar;