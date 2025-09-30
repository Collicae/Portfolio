"use client"

//Extra data for the home page
import * as homeData from '../overflow/homeOver'
import * as topDown from '../components/pageDefaults'





//General imports
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useState, useEffect, useRef, useCallback } from "react";
import Wordtyper from "@/components/typewriter";
import Link from "next/link";
import ProgressBar from "@/components/progressbar";
import TileInfo from '@/components/tile';
import Informationmodal from '@/components/infomodels';






type ProjectItem = {
  image: string;
  text: string;
  date: string;
};
export default function Home() {
  const [current, setcurrent] = useState(0)
  const INTERVAL_TIME = 10000
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [selectedSkill, setSelectedSkill] = useState(0);
  const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null);
  const currentSkill = homeData.skillProgression[selectedSkill];
  const currentDescription = homeData.skillDescription[selectedSkill]

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setcurrent(prev => (prev + 1) % homeData.colorShifts.length);
    }, INTERVAL_TIME);
  }, []);

  useEffect(() => {
    resetInterval(); // Start the interval initially
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current); // Clean up on unmount
    };
  }, [resetInterval]);

  const progressInterval = () => {
    setcurrent(prev => (prev + 1) % homeData.colorShifts.length);
    resetInterval(); // Reset timer on user interaction
  };

  const regressInterval = () => {
    setcurrent(prev => (prev - 1 + homeData.colorShifts.length) % homeData.colorShifts.length);
    resetInterval();
  };


  const Index = homeData.colorShifts[current] // captures the color interval useEffect
  const currentShift = homeData.colorShifts[current]; // e.g., index 0, 1, etc.

  return (
    <div className="">
      <main className="">

          {topDown.MainHeader()}
          
          <div className="relative bg-black lg:h-180 md:h-160 sm:h-100 h-90 justify-between flex items-center overflow-hidden">
            {/* Left Arrow Button */}
            <div
              onClick={regressInterval}
              className="absolute z-20 md:text-lg text-sm p-6 bg-[#7c777c]/20 max-w-40 ml-2 rounded-md"
            >
              <MdArrowBackIosNew />
            </div>

            {/* Background Image + Dimming Overlay */}
            <div className="absolute inset-0 z-0">
              {/* Background image */}
              <div
                style={{ backgroundImage: `url(${currentShift.image})` }}
                className="w-full h-full bg-no-repeat lg:bg-contain bg-cover bg-center lg:bg-center"
              />
              {/* Dimming overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Foreground Content (Text Only) */}
            <div className="relative z-10 w-full h-full flex justify-start items-end px-6 text-4xl md:text-5xl">
              <Wordtyper key={current} words={[Index.text]} />
            </div>

            {/* Right Arrow Button */}
            <div
              onClick={progressInterval}
              className="absolute z-20 right-0 md:text-lg text-sm p-6 bg-[#7c777c]/20 max-w-40 mr-2 rounded-md"
            >
              <MdOutlineArrowForwardIos />
            </div>
          </div>

          <div className="bg-[#282832]">
            <div className="h-20 overflow-x-auto md:overflow-x-visible">
                <nav className="grid grid-cols-3 grid-rows-1 h-full">

                  {homeData.aboutNav.map((item, index) => (
                      <Link
                      key={index}
                      href={item.href}
                      passHref
                    >
                    
                    <div key={index} className="smooth-font-size flex h-full items-center justify-center lg:text-5xl md:text-3xl text-lg transition duration-300 ease-in hover:text-black hover:lg:text-6xl hover:md:text-4xl hover:text-xl cursor-pointer"
                    style={{
                      ['--hover-bg' as any]: item.back
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = item.back;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}>
                      <h2 className=""> {item.page} </h2>
                    </div>
                    </Link>
                  ))}
                </nav>
              </div>
          </div>

          <div className="flex w-full overflow-x-auto space-x-6 py-4 bg-black hide-scrollbar">
            {homeData.skillSet.map((item, index) => {
              const Icon = item.icon;
              const isSelected = selectedSkill === index;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedSkill(index)}
                  style={
                    isSelected
                      ? {
                          background: `linear-gradient(to top, ${item.color}93, transparent)`,
                        }
                      : {}
                  }
                  className="flex flex-col items-center justify-center min-w-[150px] cursor-pointer rounded-lg px-4 py-2 transition-all duration-300"
                >
                  <Icon className="text-2xl mb-2" style={{ color: item.color }} />
                  <span>{item.name}</span>
                </div>
              );
            })}
        </div>

          {/* Progress Bars Section */}
          <div className="w-full bg-gradient-to-t from-[#414152] to-[#000000]">
            <div className="grid grid-cols-2 mt-5 md:mt-10">
              <div className="flex flex-col">
                <div className="p-4">
                  <h1 className="text-4xl md:text-6xl">Stats:</h1>
                </div>

                <div className="skills-container p-4 space-y-4">
                  <div className="skill-block">
                    <h3 className="text-2xl font-semibold mb-4">{currentSkill.name}</h3>

                    <div className="progress-item mb-3">
                      <span className="text-lg md:text-3xl">Usage: {currentSkill.usage}%</span>
                      <ProgressBar progress={parseInt(currentSkill.usage)} />
                    </div>

                    <div className="progress-item mb-3">
                      <span className="text-lg md:text-3xl">Experience: {currentSkill.experience}%</span>
                      <ProgressBar progress={parseInt(currentSkill.experience)} />
                    </div>

                    <div className="progress-item mb-3">
                      <span className="text-lg md:text-3xl">Knowledge: {currentSkill.knowledge}%</span>
                      <ProgressBar progress={parseInt(currentSkill.knowledge)} />
                    </div>
                  </div>
                </div>
              </div>

            {/* Right column: 1 item spanning the full height */}
            <div className="p-4 row-span-3 h-100 flex text-sm md:text-2xl overflow-y-auto">
              <Wordtyper words={[currentDescription.text]}/>
          </div>
        </div>
      </div>

          {/* Display my current projects */}
          <div className="mt-10 w-full">
            <div className=' md:mx-10 rounded-lg'>
                <h1 className='text-4xl md:text-6xl md:ml-5 md:text-left text-center mb-10'>Current Projects:</h1>

                <div className='h-120 overflow-x-auto'>
                  <div className='grid auto-rows-fr grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4'>

                    {homeData.currentProjects.map((items, index) => (
                      <div key={index} onClick={() => setSelectedItem(items)} className='cursor-pointer'>
                        <TileInfo text={items.text} date={items.date} image={items.image}/>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            {selectedItem && (
              <Informationmodal
                item={selectedItem}
                onClose={() => setSelectedItem(null)}/>
            )}
          </div>
      </main>
      <footer className=''>
            {topDown.FooterDefault()}
      </footer>
    </div>
  );
}
