import { motion } from "framer-motion";
import { FaReact,  FaGit, FaDatabase, FaPython } from "react-icons/fa";
import { FaC } from "react-icons/fa6";

{/* My skills  */}
const skills = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces. user experience design and attractive designs.",
    icon: FaReact,
    tags: ["React", "JavaScript", "Next.js","HTML","CSS","Tailwind CSS"],
  },
  {
    title: "Data structure & Algorithms",
    description: "algorithms and data structures to solve complex problems efficiently. solve the problem in optimal approach .",
    icon: FaC,
    tags: ["c++", "c", "Programming and data structures", "Algorithms"],
  },
  {
    title: "Backend Development",
    description: "Login authentication using the firebase.using next.js for severs handling ",
    icon: FaDatabase,
    tags: ["Firebase Authentication", "Next.js", "Hosting"],
  },
  {
    title :"Version Control",
    description :"Using Git and GitHub for efficient code management and collaboration.",
    icon : FaGit,
    tags : ["Git", "GitHub", "Branching", "Merging","visual studio code"],
  },
  {
    title :" basics of AI ML",
    description:"i use these libraries in my AIand ML lab course ",
    icon: FaPython,
    tags:["python","numpy","pandas","matplotlib","basic algorithms like DTL"]
  }
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      id="Skills"
      className="bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-white font-bold text-center mb-4 pt-10">
          My <span className="text-purple-600">skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          Technologies I work to bring ides to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {skills.map((data, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <data.icon className="text-purple mr-6" />
                <h3 className="text-xl text-white font-semibold">{data.title}</h3>
              </div>

              <p className="text-gray-400 mb-4">{data.description}</p>

              <div className="flex flex-wrap gap-2">
                {data.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-white bg-dark-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
