import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TechRadarMBL from "../TechRadarMBL";
import TechRadarPC from "../TechRadarPC";


export default function WhatILearned() {
  const TABS = ["Frontend", "Backend", "Tools"];
  const [active, setActive] = useState("Frontend");
    useEffect(() => {
    AOS.init({
      duration: 700,   // animation time in ms
      offset: 80,      // trigger point from the viewport
      easing: "ease-out",
      once: true,      // animate only once
    });
  }, [active]);

  return (
    <section id="skills" className="w-full  bg-cyan-800 py-10">
      <div className="mx-auto max-w-7xl px-4" data-aos="fade-right">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#d9ed92] mb-6">
         Technologies I work with
        </h2>
        <div className="lg:block hidden md:block">
            <TechRadarPC/>
          </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 ${
                active === tab
                  ? "bg-cyan-500/20 border-cyan-300 text-[#d9ed92] font-semibold md:text-lg"
                  : "bg-white/5 border-white/20 text-gray-200 hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:gap-2 md:grid-cols-[60%_40%] lg:grid-cols-[80%_20%]">
          {/* Outlet (content changes by active tab) */}
          <div className="order-2 md:order-2 rounded-2xl border bg-cyan-500/20 border-cyan-300 backdrop-blur-md p-4 text-gray-100 min-h-40" data-aos="fade-right">
            <OutletContent  active={active} />
          </div>

          {/* Marquee (uses your original component as-is) */}
          <div className="order-1 md:order-1 md:min-h-40 lg:hidden md:hidden">
            <TechRadarMBL/>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function OutletContent({ active }) {
  const content = {
    Frontend: {
      title: "Frontend",
      items: [
        "Semantic HTML, responsive layouts (Flex/Grid)",
        "Tailwind CSS utility-first workflows",
        "React hooks, state management, props patterns",
        "Next.js routing & data fetching basics",
        "Accessibility (focus management, ARIA)"
      ],
    },
    Backend: {
      title: "Backend",
      items: [
        "Node.js runtime fundamentals",
        "Express.js REST APIs, middleware, routing",
        "MongoDB data modeling with Mongoose",
        "Auth (JWT/cookies), validation, error handling",
        "Deployment to Vercel/Netlify serverless"
      ],
    },
    Tools: {
      title: "Tools",
      items: [
        "Git & GitHub workflows (branching/PRs)",
        "Firebase hosting/auth/Firestore basics",
        "Design collaboration with Figma",
        "Env setup, scripts, and DX tweaks",
        "CI/CD basics for web apps"
      ],
    },
  };

  const { title, items } = content[active];

  return (
    <div data-aos="fade-right">
      <h3 className="text-lg font-medium mb-3 text-[#d9ed92]">{title}</h3>
      <ul className="space-y-2 text-lg leading-relaxed text-white">
        {items.map((t, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-3 w-2 rounded-full bg-cyan-400/80" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
