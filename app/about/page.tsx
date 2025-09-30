'use client'



//Come back to this page, dont like the design and can't come up with anything right now




import React, {useState, useEffect, useRef} from "react"
import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa"; //LinkedIn Icon
import { FaGithub } from "react-icons/fa"; // Github Icon


// double "../",  refer to outside the folder 
import * as aboutData from '../../overflow/aboutOver'
import * as topDown from '../../components/pageDefaults'

type SocialDirectoryProp = {
    name: string,
    link: string,
    icon: IconType,
    color: string
};


//Names and links to my other programming accounts
//Should only keep 4 or less at a time to not overextent footer
const socialsDirectory: SocialDirectoryProp[] = [
    {name: 'Github', link: '#', icon: FaGithub, color: '#0077B5'},
    {name: 'LinkedIn', link: '#', icon: FaLinkedin, color: '#8e8989'},
]

export default function About() {
    const [currentWord, setCurrentWord] = useState(0)
    const [selectedLink, setSelectedLink] = useState(0);
    const [visibleItems, setVisibleItems] = useState<number[]>([])
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])
    const [scrollOffset, setScrollOffset] = useState(0)

    useEffect(() => {
        const handleScrolling = () => {
            setScrollOffset(window.scrollY)
        };

        window.addEventListener('scroll', handleScrolling);
        return() => window.removeEventListener('scroll', handleScrolling)
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute('data-index'));
    
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) =>
                            prev.includes(index) ? prev : [...prev, index]
                        );
                    }
                });
            },
            {
                threshold: 0.2, // Triggers when 20% of the item is visible
            }
        );
    
        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
    
        return () => {
            observer.disconnect();
        };
    }, []);
    
    //filter through the words
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
                    <h3 className="ml-5 w-90 text-[#636262] text-lg">Hey There! I'm a {aboutData.encouragingWords[currentWord].word} developer trying to leave my mark on the World.</h3>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-t from-[#1d2a35] to-indigo-500 text-7xl md:text-[8rem] lg:text-[10rem] w-full]">Caleb Collins</h1>
                </div>

            </div>

            {/* Biography section */}
            <div className="relative overflow-hidden">


                {/* Come back to this part later once you have a layout idea for this page!!! */}


                {aboutData.biographyInfo.map((item, index) => (
                    <div key={index} 
                    ref={(el) => {itemRefs.current[index] = el}} // Save the DOM ref
                    data-index={index} // So we know which item the observer is handling
                    className={`transition-opacity transform duration-700 ease-in-out 
                    ${visibleItems.includes(index)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'}`}
                    >
                        <h2 className="font-serif text-3xl md:text-5xl ml-5">{item.title}:</h2>
                        <p className="font-serif text-lg md:text-2xl mx-10">{item.bio}</p>
                    </div>
                ))}

            </div>


            {/* Socials (work) */}
            <div className="grid grid-cols-2">   

                <div className="font-serif">
                    <h1 className="text-5xl md:text-7xl flex justify-center items-center my-10">Socials:</h1>
                </div>

                <div className="font-serif content-center space-y-5 md:space-y-10">
                    
                {socialsDirectory.map((item, index) => {
                    const Icon = item.icon;
                    const currentLink = selectedLink === index
                    return (
                        <div key={index} className="flex justify-center gap-2 items-center text-2xl md:text-4xl p-2 md:p-8 md:mx-20 cursor-pointer" 
                        onClick={() => setSelectedLink(index)}
                        style={
                          currentLink
                            ? {
                                background: `linear-gradient(to top, ${item.color}93, transparent)`,
                                color: `${item.color}`,
                              }
                            : {}
                        }
                        >
                            <Icon 
                                 style={
                                    currentLink
                                      ? {
                                          color: `${item.color}`,
                                        }
                                      : {}
                                  }
                            />
                            <p className="text-white">{item.name}</p>
                        </div>
                    )
                    })}

                </div>

            </div>

            <footer>
                {topDown.FooterDefault()}
            </footer>
        </div>
    )
}

