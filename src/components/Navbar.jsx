import{useState} from 'react' ;
import { FaXmark } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa6' ;

export default  function Navbar() {
    const [showMenu,setShowMenu] = useState (false) ;

  return (
    <nav className = "fixed w-full bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
<div className =" container mx-auto flex justify-between items-center">
    <div>
        <a  className ="text-white font-bold text-xl" href ="a">
            Banavath
            <span className ="text-purple-600"> Srikanth </span>
            <div className ="w-4 h-4 bg-purple-600 rounded-full"></div>
        </a>
    </div>
    <div className = "hidden md:flex space-x-10">
        <a href ="#Home "className ="  scroll-mt-24 relative text-white/80 transition duration-300 hover:text-purple-600 group">

            <span>Home</span>
            <span className ="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href ="#About "className =" scroll-mt-24 relative text-white/80 transition duration-300 hover:text-purple-600 group">

            <span>About</span>
            <span className ="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href ="#Skills "className ="scroll-mt-24 relative text-white/80 transition duration-300 hover:text-purple-600 group">

            <span>Skills</span>
            <span className ="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href ="#Projects "className =" scroll-mt-24 relative text-white/80 transition duration-300 hover:text-purple-600 group">

            <span>Projects</span>
            <span className ="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href ="#Experience "className =" scroll-mt-24 relative text-white/80 transition duration-300 hover:text-purple-600 group">

            <span>Experience</span>
            <span className =" scroll-mt-24 absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href ="#Contact "className ="relative text-white/80 transition duration-300 hover:text-purple-600 group">

            <span>Contact</span>
            <span className =" scroll-mt-24 absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
    </div>
    {/*mobile view*/}
    <div className ="md:hidden">
       { showMenu ?( <FaXmark className ="text-2xl cursor-pointer text-white " onClick={() => setShowMenu(false)} /> ): (<FaBars className ="text-2xl cursor-pointer text-white" onClick={() => setShowMenu(true)} />)}
        

    </div>
</div>
{/*Mobile Menu*/}
{
    showMenu && (
        <div className = "md:hidden fixed p-4  bg-dark-300  rounded-lg flex flex-col space-y-6 text-center  justify-center  "> 
        <a onClick={() => setShowMenu(false)} href ="#Home"className =" scroll-mt-24 relative text-white/80 transition duration-300 hover:text-purple-600 group">

            <span>Home</span>
           
        </a>
        <a onClick={() => setShowMenu(false)} href ="#About"className =" scroll-mt-24 relative text-white/80 transition duration-300 hover:text-purple-600 group">

            <span>About</span>
            
        </a>
        <a onClick={() => setShowMenu(false)} href ="#Skills"className =" scroll-mt-24 relative text-white/80 transition duration-300 hover:text-purple-600 group">

            <span>Skills</span>
           
        </a>
        <a onClick={() => setShowMenu(false)} href ="#Projects"className =" scroll-mt-24 relative text-white/80 transition duration-300 hover:text-purple-600 group">

            <span>Projects</span>
           
        </a>
        <a onClick={() => setShowMenu(false)} href ="#Experience"className =" scroll-mt-24 relative text-white/80 transition duration-300 hover:text-purple-600 group">

            <span>Experience</span>
           
        </a>
        <a onClick={() => setShowMenu(false)} href ="#Contact"className =" scroll-mt-24 relative text-white/80 transition duration-300 hover:text-purple-600 group">

            <span>Contact</span>
           
        </a>

        </div>
    )
}

    </nav>)};