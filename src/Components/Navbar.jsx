import { Link } from 'react-router-dom';


function Navbar() {
    return(
    
<div className="fixed top-4 left-1/2 mx-auto grid w-[76%] -translate-x-1/2 grid-cols-3 items-center rounded-2xl border border-gray-200 bg-transparent px-6 py-4 z-20">
  
  {/* Logo */}
  <img
      src="/src/assets/mvpier_logo_dark.svg"
      alt="MVPIER"
      className="h-10 w-auto"
    />

  {/* Center Links */}
  <nav className="flex justify-center gap-8">
    <Link to="/" className="rounded-lg  transition hover:bg-transparent px-3 py-3">Home</Link>
    <Link to="/about " className="rounded-lg  transition hover:bg-gray-100 px-3 py-3">About</Link>
    <Link to="/services" className="rounded-lg  transition hover:bg-gray-100 px-3 py-3">Services</Link>
    <Link to="/contact" className="rounded-lg  transition hover:bg-gray-100 px-3 py-3">Contact</Link>
    

  </nav>

  {/* Right side */}
  <div className="justify-self-end">
    {/* Button or other content */}
  </div>

</div>
    )
    
}
export default Navbar;