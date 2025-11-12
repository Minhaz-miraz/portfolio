import React from 'react';
import Swiper1 from '../ReactSwiper/Swiper1/Swiper1';

import Swiper2 from '../ReactSwiper/Swiper2';
import Swiper3 from '../ReactSwiper/Swiper3';

const Projects = () => {
  const projects = [
    {
      cubeComponent: <Swiper2 />,
      title: 'Byte Story- AI-Powered Blogging Platform',
      description: 'ByteStory is an AI-driven blogging platform designed to simplify and enhance the content creation process. It integrates intelligent tools for blog generation, grammar checking, SEO scoring, PDF summarization, and speech interaction — all within a single workspace. The platform promotes productivity, accessibility, and community engagement through real-time feeds, personalized learning, and secure AI usage management. It aims to empower writers, students, and marketers to create professional, optimized content efficiently.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe', 'Socket i.o', 'Tailwind CSS', 'Firebase', 'Express.js', 'JWT'],
      live: 'https://byte-story.vercel.app/',
      github: 'https://github.com/Minhaz-miraz/ByteStory'
    },
    {
      cubeComponent: <Swiper1 />,
      title: 'Axial Construct - A Company Management Platform',
      description: 'Axial Construction is a role-based construction company management system designed to streamline operations between Administrators, HR personnel, and Employees. The platform enables efficient workforce management, transparent payroll tracking, and smooth communication across organizational levels — all from a centralized dashboard.This project demonstrates end-to-end system design, combining secure authentication, user-role-based access control, workflow automation, and integrated payroll functionality.',
      key_Features: "👤 Role - Based Access System.Admin Panel: Full system control, including managing users, monitoring project activities, and handling payments.HR Dashboard: Employee verification, profile management, and request submission to administrators.Employee Dashboard: Allows employees to post work reports, log hours, track payment history, and view completed and pending payments.Each role has unique access privileges — ensuring both data privacy and operational efficiency.",
tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'React Router', 'Tailwind CSS', 'Firebase', 'Express.js', 'JWT'],
  live: 'https://axial-construction.web.app/ ',
    github: 'https://github.com/Minhaz-miraz/Axial-Construct'
    },
    {
      cubeComponent: <Swiper3 />,
      title: 'Service Lagbe -Smart Service Provider Platform ',
      description: 'Service Lagbe  a full-stack web application designed to connect users with professional service providers for various needs — including home services, internet setup, house repairs, cleaning, and maintenance.Service providers can create and manage their own service listings with detailed information such as pricing, schedule availability, and descriptions. Through a dedicated provider dashboard, they can track bookings, view client notes, update service progress in real-time, and manage work status dynamically.Users can easily browse, book, and track services, with instant updates on provider status and work progress. The system includes complete CRUD functionality for service management, ensuring flexibility for providers to add, edit, or remove offerings anytime.Built with a focus on usability, interactivity, and real-time updates, the platform demonstrates expertise in responsive web design, dynamic data handling, and efficient backend architecture.',
      key_Features: "👤 Role - Based Access System.Admin Panel: Full system control, including managing users, monitoring project activities, and handling payments.HR Dashboard: Employee verification, profile management, and request submission to administrators.Employee Dashboard: Allows employees to post work reports, log hours, track payment history, and view completed and pending payments.Each role has unique access privileges — ensuring both data privacy and operational efficiency.",
tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'React Router', 'Tailwind CSS', 'Firebase', 'Express.js', 'JWT'],
  live: 'https://service-lagbe.web.app/ ',
    github: 'https://github.com/Minhaz-miraz/Service-Lagbe'
    }


  ];

return (
  <section id="projects" className="py-12  sm:py-16 lg:py-20 bg-cyan-800" >
    <div className=" container w-11/12 mx-auto px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-[#d9ed92] bg-clip-text text-transparent">
        Featured Projects
      </h2>
      {/* grid layout */}



      {projects.map(project => {
        const { title, description, github, tech, live } = project
        return (<>
          <div className="mt-20 grid grid-cols-1 md:gap-2 md:grid-cols-[60%_40%] lg:grid-cols-[60%_40%] rounded-2xl border bg-cyan-500/20 border-cyan-300 backdrop-blur-md p-4 text-gray-100 min-h-40">
            <div className="order-1 md:order-1  h-full  md p-4  min-h-40">

              {project.cubeComponent}

            </div>
            <div className="order-2 flex min-h-40 flex-col gap-5 rounded-xl bg-black/20 p-5 text-white">
              {/* Title */}
              <h3 className="text-2xl font-semibold tracking-wide text-[#d9ed92] md:text-3xl">
                {title}
              </h3>

              {/* Tech stack badges */}
              {!!tech.length && (
                <div className="flex flex-wrap items-center gap-2">
                  {tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-sm leading-none text-cyan-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              {description && (
                <p className="text-2xl text-white md:text-base/7">
                  {description}
                </p>
              )}

              {/* Optional sections
              {(challenges || future) && (
                <div className="space-y-4">
                  {challenges && (
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-wider text-cyan-300/80">
                        Challenges
                      </p>
                      <p className="text-sm text-gray-300">{challenges}</p>
                    </div>
                  )}
                  {future && (
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-wider text-cyan-300/80">
                        Future Plans
                      </p>
                      <p className="text-sm text-gray-300">{future}</p>
                    </div>
                  )}
                </div>
              )} */}

              {/* Actions */}
              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-cyan-300 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 hover:bg-cyan-300/20"
                  >
                    Live Link
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-violet-300/60 bg-violet-300/10 px-4 py-2 text-sm font-medium text-violet-100 hover:bg-violet-300/20"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

        </>
        )
      })}



      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   sm:gap-8 ">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/5 lg:w-[350px] rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm group hover:transform hover:-translate-y-2 transition-all duration-300"
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
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">{project.title}</h3>
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
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d9ed92]  rounded-lg text-black font-medium hover:shadow-lg transition-all text-sm sm:text-base"
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
          </div> */}
    </div>
  </section>
);
};

export default Projects;