import React from "react";
import { motion } from "framer-motion";

export default function GithubContribution() {
  const username = "Minhaz-Miraz";

  return (
    <section className="py-12 bg-cyan-800 text-white rounded-3xl shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl text-[#d9ed92] sm:text-4xl font-extrabold mb-6 text-
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}"
        >
          💻 My GitHub Contributions
        </motion.h2>

        <p className="max-w-2xl mx-auto text-white mb-8 sm:mb-10 text-lg sm:text-base">
          Here's a snapshot of my open-source journey — coding, learning, and contributing every day.
        </p>

        {/* GitHub Stats */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 mx-auto">
          {/* Stats Card */}
          <div className="w-full lg:w-1/2">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0f172a&title_color=67e8f9&text_color=e2e8f0&icon_color=67e8f9`}
              alt="GitHub Stats"
              className="rounded-xl w-full h-auto shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Streak Stats */}
          {/* <div className="w-full lg:w-1/2">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0f172a&ring=67e8f9&fire=67e8f9&currStreakLabel=67e8f9`}
              alt="GitHub Streak"
              className="rounded-xl w-full h-auto shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div> */}
        </div>

        {/* Activity Graph */}
        <div className="mb-8 max-w-5xl mx-auto ">
          <motion.div
            className="overflow-hidden rounded-xl border border-cyan-700 shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&bg_color=0f172a&color=67e8f9&line=67e8f9&point=22d3ee&area=true&hide_border=true`}
              alt="GitHub Activity Graph"
              className="rounded-xl w-full h-auto shadow-md hover:scale-105 transition-transform duration-300 "
            />
          </motion.div>
        </div>

        {/* Bottom Section - Languages and Contribution Chart */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 sm:gap-6 mb-8">
          {/* Top Languages */}
          <div className="w-full lg:w-1/3">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0f172a&title_color=67e8f9&text_color=e2e8f0`}
              alt="Top Languages"
              className="rounded-xl w-full h-full min-h-[200px] object-cover border border-cyan-700 shadow-md"
            />
          </div>

          {/* Contribution Chart */}
          {/* <div className="w-full lg:w-2/3">
            <img
              src={`https://ghchart.rshah.org/2dd4cf/${username}`}
              alt="GitHub Contribution Chart"
              className="rounded-xl w-full h-full min-h-[200px] object-cover border border-cyan-700 shadow-md"
            />
          </div> */}
        </div>

        {/* Button */}
        <motion.a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 sm:px-8 py-3 rounded-xl transition-all duration-300 shadow-lg text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My GitHub →
        </motion.a>
      </div>
    </section>
  );
}