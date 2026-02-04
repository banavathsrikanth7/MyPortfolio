import { motion } from 'framer-motion'
import project1 from '../assets/project1.jpeg'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import ProjectsCard from "./ProjectsCard"
{/*project data */}
const projects = [
  {
    title: "ChatBot Application",
    description: "An AI-powered chatbot for instant customer support.added animation using framer-motion and styled with tailwind css. added firebase for authentication.",
    image: project1,
    tech: ["React", "Tailwind CSS", "JavaScript","firebase authentication ",],
  },
  {
    title: "Learning beyond the classroom",
    description: "A comprehensive educational platform offering courses, resources, and interactive learning tools.made it responsive  and added animations using framer-motion.",
    image: project2,
    tech: ["React", "next.js", "tailwind CSS"],
  },
  {
    title: "amazon clone ",
    description: " basic An e-commerce platform with product listings and a shopping cart.",
    image: project3,
    tech: ["JavaScript", "HTML", "CSS"],
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      viewport={{ once:true }}
      id="Projects"
      className="bg-dark-200 py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-white font-bold text-center mb-4">
          My <span className="text-purple-600">Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Some of my recent works
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {
            projects.map((project, index) => (
              <ProjectsCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tech={project.tech}
              />
            ))
          }
        </div>
      </div>
    </motion.div>
  )
}

export default Projects;
