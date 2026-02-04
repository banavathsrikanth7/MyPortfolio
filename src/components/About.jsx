import React from 'react'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaRocket } from 'react-icons/fa'
import { FaConnectdevelop,  } from 'react-icons/fa6'

{/* about*/}
const aboutData = {
  info: [
    {
      title: "Innovation",
      description: "Focused on building clean, responsive, and user-friendly interfaces.",
      icon: FaRocket,
    },
    {
      title: "Tech Enthusiast",
      description: "Always curious to learn new technologies and improve skills.",
      icon: FaLaptopCode,
    },
    {
      title: "Electrical Engineering Student",
      description: "Pursuing a degree in Electrical Engineering with a passion for coding and problem-solving.",
      icon: FaConnectdevelop,
    }
  ],
}

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="About"
      className="py-20 bg-dark"
    >
      <div className="container mx-0 px-6">
        {/* heading */}
        <h2 className="text-3xl  text-white font-bold text-center mb-4">
          About <span className="text-purple-600">Me</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know about my background and passion
        </p>

        {/* image and my journey */}
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/2 rounded-xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true}}
              className="w-100 h-100 object-cover "
              src="/image.png"
              alt="About Me Image"
            />
          </div>

          {/* text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl text-purple-600 font-semibold mb-6">My Journey</h3>

              <p className="text-gray-300 mb-6">
                I started my coding journey with HTML, CSS, and JavaScript, then learned React and Tailwind CSS to build modern, responsive web applications. Currently, I am improving my problem-solving skills through DSA using C++ and exploring the basics of AI/ML with Python, NumPy, and Pandas.
              </p>

              <p className="text-gray-300 mb-12">
                I am highly interested in coding and deeply passionate about the Electrical Engineering domain. I enjoy combining programming with core electrical concepts to solve real-world problems, and I am constantly working on improving my skills in both software development and my electrical engineering coursework.
              </p>

              {/* cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutData.info.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl text-white font-semibold mb-3">
                      {data.title}
                    </h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
