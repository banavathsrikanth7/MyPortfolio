import{ motion} from 'framer-motion';
export default  function Hero() {
    return (
<motion.div
initial = {{opacity:0 ,y:50}}
whileInView = {{opacity:1 , y:0}}
transition = {{duration:0.6 , ease:'easeOut'}}
viewport = {{once:true}}
id ='Home'
className ="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
> 
    <div className ="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
      {/*left side */}
      <div className ="md:w-1/2 mb-10 md:mb-0">
     <h1 className ="text-4xl md:text-6xl font-bold text-white mb-4">
        Hi, I'm <span className="text-purple-600">Banavath Srikanth</span>
     </h1>
     <h2 className ="text-2xl md:text-4xl text-white font-semibold mb-6 typewriter">Frontend Developer</h2>
     <p className ="text-lg  text-gray-300 mb-8"> I create stunning web experiences with modern technologies and innovation design. </p>
     <div className ="flex space-x-4">
        <a href ="#projects" className ="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition duration-300">View Work</a>
        <a href ="#contact" className ="px-6 py-3 border border-purple-600 text-white rounded-lg font-medium hover:bg-purple/20 transition duration-300">Contact Me</a>
     </div>
      </div>
        {/*right side */}
        <div className="md:w-1/2 flex justify-center">
          <div className=" relative w-64 h-64 md:h-80 md:w-80 ">
            <div className ="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70"></div>
            <motion.img
            animate={{y:[0,-20,0]}}
            transition = {{duration:4 , repeat:Infinity ,repeatType:"loop",ease:"easeInOut"}}
             src="/image.png" alt="Profile" className=" relative rounded-full w-64 h-64 md:h-80 md:w-80 object-cover z-10 animate-float" />
          </div>
        </div>
        </div>

</motion.div>
        
    )};