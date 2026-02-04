import {motion} from 'framer-motion';
export default function Work() {
    return (
        <motion.div
       initial = {{opacity:0 ,y:50}}
    whileInView = {{opacity:1 , y:0}}
    transition = {{duration:0.5 , ease:'easeOut'}}
    viewport = {{once:true}}
    id ="Experience"
    className ="bg-dark-100 py-20 ">
        <div className ="container mx-auto px-6">
            <h2 className = "text-3xl font-bold text-center mb-4 text-white" >Work <span className ="text-purple-600">
                Experience </span> </h2>
                <p className ="text-gray-400 text-center max-w-2xl mx-auto mb-16">My work experience and professional journey</p>
                 <p className="text-gray-300  p-5">
                     I have working in PPGS society as a web developer  for 6 months and i have worked on various projects and gained experience in frontend development and also i have worked on some personal projects to enhance my skills and knowledge in web development.
                 </p>

                 <p className="text-gray-300 p-5">build the lot of  projects as Frontend developer</p>
                 
                  </div>
        </motion.div>
    )}
