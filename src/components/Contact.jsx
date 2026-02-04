import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin,  Instagram } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true}}
      className="bg-dark-200 py-20"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Contact <span className="text-purple-600">Me</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let’s talk!
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-dark-300 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Get in Touch
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <Mail className="text-purple" />
                <span className="text-gray-300">
                 cahvanlokesh@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-purple" />
                <span className="text-gray-300">
                  +91 9398971146
                </span>
              </div>
            </div>
          </motion.div>

          {/*  Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-dark-300 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Connect with Me
            </h3>

            <div className="flex flex-wrap gap-4">
              {[
                {
                  icon: <Github />,
                  link: "https://github.com/banavathsrikanth7",
                  label: "GitHub",
                },
                {
                  icon: <Linkedin />,
                  link: "https://www.linkedin.com/in/banavath-srikanth/",
                  label: "LinkedIn",
                },
               
                {
                  icon: <Instagram />,
                  link: "https://www.instagram.com/banavath_srikanth10/",
                  label: "Instagram",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-dark-100 text-gray-300 hover:bg-purple hover:text-white transition-all duration-300"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

 