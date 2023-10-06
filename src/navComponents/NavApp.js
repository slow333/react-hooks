import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import {Link, Route, Routes} from "react-router-dom";

function NavApp() {

   return (
       <div>
          <nav className='nav bg-dark'>
             <Link to="/" className="nav-item text-white p-2">Home</Link>
             <Link to="/about-me" className="nav-item text-white p-2">About Me</Link>
          </nav>
          <Routes>
             <Route path="/" element={<HomePage/>}/>
             <Route path="/about-me" element={<AboutMe/>}/>
          </Routes>
       </div>
   );
}

export default NavApp;
