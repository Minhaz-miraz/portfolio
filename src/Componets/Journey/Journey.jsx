import { useEffect, useState } from "react";
import { Briefcase, GraduationCap, CalendarDays } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Journey() {
  const [tab, setTab] = useState("education"); // "experience" | "education"
   useEffect(() => {
    AOS.init({
      duration: 700,   // animation time in ms
      offset: 80,      // trigger point from the viewport
      easing: "ease-out",
    //   once: false,      // animate only once
    });
  }, [tab]);

  const education = [
    {
      title: "SSC",
      place: "Feni Govt. Pilot High School · Institute",
      date: "2014 - 2019",
    },
    {
      title: "HSC",
      place: "Birshrestha Noor Mohammad Public College · Institute",
      date: "2019 - 2021",
    },
    {
      title: "B. Sc. in Environmental Science & Disaster Management",
      place: "Patuakhali Science and Technology University",
      date: "2023 - 2027(Expected)",
    },
  ];

  // Example experience data. Replace with your real items.
  const experience = [
    {
      title: "personal projects",
      place: "4",
      date: "june-august,2025",
    },
    {
      title: "Team Project",
      place: "01",
      date: "",
    },
    // {
    //   title: "Freelance",
    //   place: "Self-employed",
    //   date: "2021 - 2023",
    // },
  ];

  const items = tab === "education" ? education : experience;
//   const items = tab === "education" & education 

  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl  text-[#d9ed92] font-semibold tracking-tight sm:text-4xl">
            My Personal Journey
          </h2>
          {/* <p className="mt-2 text-sm text-gray-500">My personal journey</p> */}

          {/* Tabs */}
          <div className="mt-6 inline-flex items-center gap-4 rounded-full  p-1">
            <button
              onClick={() => setTab("experience")}
              className={[
                "flex items-center gap-2 rounded-full px-4 py-2 text-sm transition",
                tab === "experience"
                  ? "border bg-cyan-500/20 border-cyan-300 text-[#d9ed92]"
                  : "text-white hover:text-gray-900",
              ].join(" ")}
              aria-pressed={tab === "experience"}
            >
              <Briefcase className="h-4 w-4" />
              Experience
            </button>
            <button
              onClick={() => setTab("education")}
              className={[
                "flex items-center gap-2 rounded-full px-4 py-2 text-sm transition",
                tab === "education"
                  ? "border bg-cyan-500/20 border-cyan-300 text-[#d9ed92]"
                  : "text-white hover:text-gray-900",
              ].join(" ")}
              aria-pressed={tab === "education"}
            >
              <GraduationCap className="h-4 w-4" />
              Education
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          {/* Center line */}
          <div className="pointer-events-none absolute left-1/2 top-0 -ml-px h-full w-px bg-gray-200" />

          <ul className="space-y-12">
            {items.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <li data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                  key={idx}
                  className="relative grid grid-cols-1 items-start gap-3 md:grid-cols-2"
                >
                  {/* Left column */}
                  <div
                    className={[
                      "md:pr-10",
                      isLeft ? "order-1" : "order-2 md:order-1",
                    ].join(" ")}
                  >
                    {isLeft && (
                      <Card title={item.title} place={item.place} date={item.date} />
                    )}
                  </div>

                  {/* Timeline node */}
                  <div className="absolute left-1/2 top-1.5 -translate-x-1/2">
                    <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#d9ed92] ring-5 ring-[#cbe765]" />
                  </div>

                  {/* Right column */}
                  <div
                    className={[
                      "md:pl-10",
                      isLeft ? "order-2" : "order-1 md:order-2",
                    ].join(" ")}
                  >
                    {!isLeft && (
                      <Card title={item.title} place={item.place} date={item.date} />
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Card({ title, place, date }) {
  return (
    <div className="rounded-2xl border bg-cyan-500/20 border-cyan-300  p-5 shadow-sm transition hover:shadow-md">
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="mt-1  text-base font-semibold">{place}</p>
      <div className="mt-3 flex items-center gap-2 font-semibold text-base">
        <CalendarDays className="h-4 w-4" />
        <span>{date}</span>
      </div>
    </div>
  );
}
