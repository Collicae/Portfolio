'use client'


//Extra data for the home page
import * as projectData from "../../overflow/projectOver"
import * as topDown from '../../components/pageDefaults'


import React, {useState, useEffect} from "react"
import Wordtyper from "@/components/typewriter";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function projects() {
    const [selectedProject, setSelectedProject] = useState(0)
    const [numImg, setNumImg] = useState(0)
    const currentProject = projectData.completedProjects[selectedProject]


    const Index = projectData.completedProjects[selectedProject]
    const imgIndex = projectData.completedImage[selectedProject]

    useEffect(() => {
        setNumImg(0);
    }, [selectedProject]);
      

    const progressInterval = () => {
        setNumImg(prev => (prev + 1) % imgIndex.img.length);
      };
    
    const regressInterval = () => {
        setNumImg(prev => (prev - 1 + imgIndex.img.length) % imgIndex.img.length);
      };

    return (
        <div className="">
                {topDown.MainHeader()}


                {/* Brief explaination of my work */}
                <div>


                </div>


                {/* Start of the completed projects grid */}
                <div className="grid grid-cols-3  mt-10 bg-gray-300 p-0 ">

                    <div className="">

                        <div className="border-r-4 h-full bg-[#444039]">
                            <h1 className="text-center content-center text-2xl md:text-3xl lg:text-4xl h-20 bg-[#787f8e] font-bold">Completed Projects</h1>

                            <ul className="overflow-y-auto">
                                {projectData.completedProjects.map((item, index) => (
                                    <li key={index} onClick={() => setSelectedProject(index)} className="text-2xl overflow-x-auto hide-scrollbar whitespace-nowrap py-5 bg-[#42474f] hover:bg-[#2c2f34] cursor-pointer">
                                        <p className="ml-5"> {[item.name]} </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    
                    
                    <div className="col-span-2 grid grid-rows-[auto_auto] ">
                            
                            <div className="flex items-center ">

                            <div
                                onClick={regressInterval}
                                className="absolute z-20 md:text-lg text-sm p-6 bg-[#7c777c]/20 max-w-40 ml-2 rounded-md cursor-pointer">
                                <MdArrowBackIosNew />
                            </div>
                                
                                <img  src={imgIndex.img[numImg]} className="h-full w-full object-fill" alt="pictures of the projects"/>
                              
                                <div
                                onClick={progressInterval}
                                    className="absolute z-20 right-0 md:text-lg text-sm p-6 bg-[#7c777c]/20 max-w-40 mr-2 rounded-md cursor-pointer">
                                    <MdOutlineArrowForwardIos />
                                </div>
                            </div>
                                
                            
                            <div className=" text-2xl md:text-3xl lg:text-4xl bg-black overflow-y-auto overflow-x-hidden break-words whitespace-normal">
                                
                                <div className="mx-3 w-full">
                                    <h1 className="text-2xl mt-3 lg:text-5xl" >{[currentProject.name]}</h1>
                                    <br />
                                    <h2 className="text-2xl  lg:text-5xl" >Created: {[currentProject.openDate]} - {[currentProject.closeDate]}</h2>
                                </div>
                              
                                <br />

                                <p className="text-lg ml-2"> {[currentProject.desc]}</p>
                     
                            </div>
                            
                    </div>
                </div>


                {topDown.FooterDefault()}
        </div>
    )
}