import React, { useState, useEffect } from 'react';
import { CursorOne } from "cursor-style";
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { 
  Code, 
  ExternalLink, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Menu,
  X,
  Linkedin,
  ChevronDown,
  Star,
  Users,
  Coffee,
  Award
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'MongoDB', src: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000", level: 90, color: 'from-green-500 to-green-600' },
    { name: 'Express.js', src: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000", level: 85, color: 'from-gray-600 to-gray-700' },
    { name: 'React.js', src: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000", level: 95, color: 'from-blue-500 to-blue-600' },
    { name: 'Node.js', src: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000', level: 88, color: 'from-green-600 to-green-700' },
    { name: 'Tailwind CSS', src: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000", level: 92, color: 'from-cyan-500 to-cyan-600' },
    { name: 'JavaScript', src: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000", level: 90, color: 'from-yellow-500 to-yellow-600' }
  ];

  const projects = [
    {
      title: 'Service Lagbe',
      description: 'Service Lagbe is a full-stack web application that enables registered users to create and offer various services while allowing customers to book these services with flexible scheduling. The platform provides comprehensive service management tools for providers and an intuitive booking experience for customers.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      image: 'https://i.postimg.cc/6q5mFk7j/Screenshot-57.png',
      demo: 'https://service-lagbe.web.app/ ',
      github: 'https://github.com/Minhaz-miraz/Service-Lagbe'
    },
    {
      title: 'Hobby-hub',
      description: 'HobbyHub is a vibrant platform for hobby enthusiasts to discover, create, and manage local interest-based groups—whether its a book club, painting circle, gaming crew, or cooking collective. Join your community or start a new one—it’s your social gateway to connection through shared passions!',
  tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        image: 'https://i.postimg.cc/hj3LP6y3/Screenshot-58.png',
      demo: 'https://hobby-hub-a5b25.web.app/',
      github: 'https://github.com/Minhaz-miraz/HobbyHub'
    },
    {
      title:'DocHelp',
      description: 'DocHelp is a diagonstic center website.It makes the more easier and User friendly to booking or cancelling Doctor to visit',
        tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      image: 'https://i.postimg.cc/JzqWQ40S/Screenshot-59.png',
      demo: 'https://dochelptalk.netlify.app/',
      github: 'https://github.com/Minhaz-miraz/DocHelp'
    }
  ];

  

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-x-hidden">
          <CursorOne size={30} delay={5} bgColor="gray" useMixBlendDifference={true} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://i.postimg.cc/59XNsddc/M-club.jpg" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" 
                alt="Logo" 
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-3 py-2 text-sm lg:text-base transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-cyan-400' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-lg border-t border-white/10">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
        
        {/* Floating Elements - Hidden on mobile for performance */}
        <div className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20 animate-pulse hidden sm:block" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse hidden sm:block" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col  lg:flex-row items-center justify-center gap-8 lg:gap-5 xl:gap-20">
            {/* Text Content */}
            
            <motion.div initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:ml-28 lg:flex-1 order-2 lg:order-1">
              <motion.h1
               
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                Hello there!
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                 I'm Minhajul Islam
                </span>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                  Miraz
                </span>
              </motion.h1>
              
              <motion.p 
              data-aos="fade-up"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }} className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Crafting exceptional web experiences with MERN STACK
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 rounded-full font-semibold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:scale-105"
                >
                  <Download size={20} />
                  Download CV
                </button>
              </div>
            </motion.div>

            {/* Image */}
            <div className="flex-shrink-0 order-1 lg:order-2 lg:mr-24">
              <img data-aos="zoom-in-up"  data-aos-once="false"     data-aos-duration="1000"

                className="w-64 h-64 rounded-full sm:w-80 sm:h-80 lg:w-96 lg:h-96   object-cover shadow-2xl transform  transition-transform duration-300" 
                src="https://i.postimg.cc/d17FgZzZ/miraz.jpg" 
                alt="Minhajul Islam Miraz" 
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} sm:size={32} className="text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed">
             Hi, I'm Minhajul Islam Miraz, a passionate MERN Stack Developer who loves building modern web applications using MongoDB, Express.js, React.js, and Node.js. I'm focused on writing clean, efficient code and creating responsive, user-friendly interfaces.

Although I don’t have professional job experience yet, I’ve built several personal and practice projects to strengthen my skills. I enjoy learning new technologies, solving problems, and bringing ideas to life on the web.

I’m currently looking for opportunities to grow as a developer and contribute to meaningful projects.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'User-Focused Design'].map((trait) => (
                <span
                  key={trait}
                  className="px-3 sm:px-4 py-2 bg-white/10 rounded-full text-xs sm:text-sm border border-white/20"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{skill.name}</h3>
                  <img src={skill.src} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" alt={skill.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white/5 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-xs sm:text-sm text-cyan-300 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a target='blank'
                      href={project.demo}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-medium hover:shadow-lg transition-all text-sm sm:text-base"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center justify-center gap-2 px-4 py-2 border border-white/30 rounded-lg text-white font-medium hover:bg-white/10 transition-all text-sm sm:text-base"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-12">
              Ready to bring your ideas to life? Let's discuss your next project!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {[
                { icon: Mail, title: 'Email', value: 'minhajulmiraz28@gmail.com', href: 'mailto:minhajulmiraz28@gmail.com' },
                { icon: Phone, title: 'Phone', value: '01536083587', href: ' https://wa.me/qr/TYCOQNFCSJKNP1 ' },
                { icon: MapPin, title: 'Location', value: 'Barishal,Bangladesh', href: '#' }
              ].map((contact) => (
                <a
                  key={contact.title}
                  href={contact.href}
                  className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group block"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <contact.icon size={18} sm:size={20} className="text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{contact.title}</h3>
                  <p className="text-white/70 text-sm sm:text-base break-all sm:break-normal">{contact.value}</p>
                </a>
              ))}
            </div>

            <div className="flex justify-center gap-4 sm:gap-6">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Mail, href: '#', label: 'Email' },
                { icon: ExternalLink, href: '#', label: 'Website' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-110"
                >
                  <social.icon size={18} sm:size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;