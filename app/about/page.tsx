'use client'

import React, { useState, useEffect, useRef, useCallback } from "react"
import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import ProgressBar from "@/components/progressbar";


//Extra data for the home page
import * as aboutData from "../../overflow/aboutOver"
import * as topDown from '../../components/pageDefaults'
import Wordtyper from "@/components/typewriter";
import * as homeData from '../../overflow/homeOver'


type SocialDirectoryProp = {
    name: string,
    link: string,
    icon: IconType,
    color: string
};

const socialsDirectory: SocialDirectoryProp[] = [
    { name: 'Github', link: 'https://github.com/Collicae', icon: FaGithub, color: '#0077B5' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/caleb-collins-4b364b336', icon: FaLinkedin, color: '#8e8989' },
]



export default function About() {
    const [currentWord, setCurrentWord] = useState(0)
    const [selectedLink, setSelectedLink] = useState(0);
    const [visibleItems, setVisibleItems] = useState<number[]>([])
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])
    const [scrollOffset, setScrollOffset] = useState(0)


    const [current, setCurrent] = useState(0)
    const INTERVAL_TIME = 10000
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [selectedSkill, setSelectedSkill] = useState(0);
    const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null);
    const currentSkill = homeData.skillProgression[selectedSkill];
    const currentDescription = homeData.skillDescription[selectedSkill]


    type ProjectItem = {
        image: string;
        text: string;
        date: string;
      };
    // --- carousel state, moved over from Home ---


  const Index = homeData.colorShifts[current] // captures the color interval useEffect
  const currentShift = homeData.colorShifts[current]; // e.g., index 0, 1, etc.

    const resetInterval = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrent(prev => (prev + 1) % homeData.colorShifts.length);
        }, INTERVAL_TIME);
    }, []);

    useEffect(() => {
        resetInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [resetInterval]);

    const progressInterval = () => {
        setCurrent(prev => (prev + 1) % homeData.colorShifts.length);
        resetInterval();
    };
    const regressInterval = () => {
        setCurrent(prev => (prev - 1 + homeData.colorShifts.length) % homeData.colorShifts.length);
        resetInterval();
    };
    //const currentShift = aboutData.colorShifts[current];
    // --- end carousel state ---

    useEffect(() => {
        const handleScrolling = () => setScrollOffset(window.scrollY);
        window.addEventListener('scroll', handleScrolling);
        return () => window.removeEventListener('scroll', handleScrolling)
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute('data-index'));
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => prev.includes(index) ? prev : [...prev, index]);
                    }
                });
            },
            { threshold: 0.2 }
        );
        itemRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const wordInterval = setInterval(() => {
            setCurrentWord((prevIndex) => (prevIndex + 1) % aboutData.encouragingWords.length)
        }, 5000);
        return () => clearInterval(wordInterval)
    }, [])

    return (
        <div className="">
            {topDown.MainHeader()}

            <div className="relative w-full h-75 flex justify-center md:justify-start items-end border-b-4 border-[#3b536b] mb-5">
                <div className="font-serif">
                    <h3 className="ml-5 w-90 text-[#636262] text-lg">Hey There! I&apos;m a {aboutData.encouragingWords[currentWord].word} developer trying to leave my mark on the World.</h3>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-t from-[#1d2a35] to-indigo-500 text-7xl md:text-[8rem] lg:text-[10rem] w-full]">Caleb Collins</h1>
                </div>
            </div>

            {/* Story carousel — moved from Home */}
            <div className="relative bg-black lg:h-140 md:h-120 sm:h-90 h-70 justify-between flex items-center overflow-hidden mb-10">
                <div onClick={regressInterval} className="absolute z-20 md:text-lg text-sm p-6 bg-[#7c777c]/20 max-w-40 ml-2 rounded-md cursor-pointer">
                    <MdArrowBackIosNew />
                </div>

                <div className="absolute inset-0 z-0">
                    <div
                        style={{ backgroundImage: `url(${currentShift.image})` }}
                        className="w-full h-full bg-no-repeat lg:bg-contain bg-cover bg-center lg:bg-center"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 w-full h-full flex justify-start items-end px-6 text-2xl md:text-4xl">
                    <Wordtyper key={current} words={[currentShift.text]} />
                </div>

                <div onClick={progressInterval} className="absolute z-20 right-0 md:text-lg text-sm p-6 bg-[#7c777c]/20 max-w-40 mr-2 rounded-md cursor-pointer">
                    <MdOutlineArrowForwardIos />
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

            {/* Biography section */}
            <div className="relative overflow-hidden">
                {aboutData.biographyInfo.map((item, index) => (
                    <div key={index}
                        ref={(el) => { itemRefs.current[index] = el }}
                        data-index={index}
                        className={`transition-opacity transform duration-700 ease-in-out 
                        ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <h2 className="font-serif text-3xl md:text-5xl ml-5">{item.title}:</h2>
                        <p className="font-serif text-lg md:text-2xl mx-10">{item.bio}</p>
                    </div>
                ))}
            </div>

            {/* Socials */}
            <div className="grid grid-cols-2">
                <div className="font-serif">
                    <h1 className="text-5xl md:text-7xl flex justify-center items-center my-10">Socials:</h1>
                </div>
                <div className="font-serif content-center space-y-5 md:space-y-10">
                    {socialsDirectory.map((item, index) => {
                        const Icon = item.icon;
                        const currentLink = selectedLink === index
                        return (
                            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer"
                                onClick={() => setSelectedLink(index)}
                                className="flex justify-center gap-2 items-center text-2xl md:text-4xl p-2 md:p-8 md:mx-20 cursor-pointer"
                                style={currentLink ? { background: `linear-gradient(to top, ${item.color}93, transparent)`, color: item.color } : {}}>
                                <div className="flex justify-center gap-2 items-center text-2xl md:text-4xl p-2 md:p-8 md:mx-20 cursor-pointer">
                                    <Icon style={currentLink ? { color: `${item.color}` } : {}} />
                                    <p className="text-white">{item.name}</p>
                                </div>
                            </a>
                        )
                    })}
                </div>

                {scrollOffset > 400 && (
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-5 right-5 p-4 bg-indigo-600 text-white rounded-full shadow-lg">
                        ↑ Back to Top
                    </button>
                )}
            </div>

            <footer>
                {topDown.FooterDefault()}
            </footer>
        </div>
    )
}

