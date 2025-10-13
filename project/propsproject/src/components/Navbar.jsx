
import {Link} from 'react-router-dom';
function Navbar() {


    



  return (
    <>
       <div className="bg-blue-900 flex justify-between items-center text-white p-5">
           <div>
            LOGO
           </div>
           <div className='flex gap-10'>
            <Link to="/"   state={{name:"React",subject:"Node"}}>Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
             <Link to="/form">Form</Link>


           
           </div>
       </div>
    </>
  )
}

export default Navbar
