import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { futurePlans } from "@/overflow/plansOver";
import { section } from "framer-motion/client";


const ParallaxScroll: React.FC = () => {
    const { scrollYProgress } = useScroll();
  
    const totalSections = futurePlans.length;
    const sectionHeight = 1 / totalSections;
  
    return (
      <div className="relative" style={{ height: `${totalSections * 100}%` }}>
        {futurePlans.map((plan, index) => {
        const start = sectionHeight * index;
        const end = start + sectionHeight;

  const y = useTransform(scrollYProgress, [start, end], ["20%", "0%"]);
  const opacity = useTransform(
    scrollYProgress,
    [start + sectionHeight * 0.2, start + sectionHeight * 0.35, end - sectionHeight * 0.35, end - sectionHeight * 0.2],
    [0, 1, 1, 0]
  );
  

  return (
    <div key={index} className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 "
        style={{ backgroundImage: `url(${plan.image})` }}
      />
  
    
      <div className="absolute mt-15 inset-0 bg-black/40 z-0" />
  
      {/* Scroll-animated content */}
      <motion.div
        className="relative z-10 w-full h-full px-10 flex items-center justify-center"
        style={{ y, opacity }}
      >
        <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur p-6 rounded-xl shadow-lg text-white border border-white/20">
          <h2 className="text-black text-4xl font-bold mb-2">{plan.name}</h2>
          <p className="text-black text-sm opacity-80">
            Status: <strong>{plan.date} — {plan.status}</strong>
          </p>
          <p className="text-black mt-4">- {plan.goal}</p>
          <p className="mt-2 text-sm text-black">Category: {plan.category}</p>
          {plan.Links && (
            <div className="flex justify-center">
              <a
                href={plan.Links}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline mt-2 p-2 rounded-2xl text-3xl mt-5 bg-gray-300 hover:bg-gray-400 inline-block cursor-pointer"
              >
                View Project
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
})}

      </div>
    );
  };
  
  export default ParallaxScroll;