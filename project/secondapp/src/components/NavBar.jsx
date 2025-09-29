import { Link } from "react-router-dom";


function NavBar() {
  

  return (
    <>
     <div className="bg-black p-3 text-white flex justify-between">
        <div>Logo</div>
        <div className="flex gap-10">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contect">Contact</Link>
              <Link to="/hooksprocess">Hooks Process</Link>
              <Link to="/useeff">Use Effect</Link>
              <Link to="/class">Class</Link>
        </div>
     </div>
    </>
  )
}

export default NavBar;
