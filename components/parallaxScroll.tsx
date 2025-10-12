'use client';

import { motion, useScroll } from 'framer-motion';
import React from 'react';
import { futurePlans } from '@/overflow/plansOver';
import { useSectionTransforms } from '@/customHooks/parallaxHook';

const ParallaxScroll: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const totalSections = futurePlans.length;

  const transforms = useSectionTransforms(scrollYProgress, totalSections);

  return (
    <div className="relative" style={{ height: `${totalSections * 100}vh` }}>
      {futurePlans.map((plan, index) => {
        const { y, opacity } = transforms[index];

        return (
          <div key={plan.name || index} className="relative w-full h-screen overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{ backgroundImage: `url(${plan.image})` }}
            />
            <div className="absolute mt-15 inset-0 bg-black/40 z-0" />

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
                      className="text-black underline p-2 rounded-2xl text-3xl mt-5 bg-gray-300 hover:bg-gray-400 inline-block cursor-pointer"
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
