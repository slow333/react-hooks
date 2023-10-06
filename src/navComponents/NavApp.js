import HomePage from "./HomePage";
import AboutMe from "./AboutMe";

function NavApp() {

   return (
       <div>
          <nav className="nav">
             <a href="/" className="nav-item">Nav page</a>
             <a href="/home" className="nav-item">homepage</a>
             <a href="/aboutMe" className="nav-item">About Me</a>
          </nav>
          <HomePage/>
          <AboutMe/>
       </div>
   );
}

export default NavApp;
