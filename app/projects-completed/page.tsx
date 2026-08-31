'use client'


//Extra data for the home page
import * as projectData from "../../overflow/projectOver"
import * as topDown from '../../components/pageDefaults'


import React, {useState, useEffect} from "react"
import Image from "next/image"
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import Model from "@/components/model"

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(0)
    const [selectedModels, setSelectedModels] = useState(0)
    const currentProject = projectData.completedProjects[selectedProject]
    const currentModel = projectData.completedModels[selectedModels]
    const [activeSource, setActiveSource] = useState('') // 'project' | 'model' | null
    const [numImg, setNumImg] = useState(0)



    //const Index = projectData.completedProjects[selectedProject]
    const imgIndex = projectData.completedImage[selectedProject]
    const imgModel = projectData.modelImgs[selectedModels]

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
                <div className="grid grid-cols-3 md:mx-5 mt-10 bg-gray-300 p-0 mb-10  border-2">

                    <div className="">

                        <div className="border-r-4 h-full bg-[#2a2723]">
                            <h1 className="text-center content-center text-2xl md:text-3xl lg:text-4xl h-20 bg-[#787f8e] font-bold">Completed Projects</h1>

                            <ul className="overflow-y-auto">
                                {projectData.completedProjects.map((item, index) => (
                                    <li key={index} onClick={() => {setSelectedProject(index), setActiveSource('project')} } className="text-2xl overflow-x-auto hide-scrollbar whitespace-nowrap py-5 bg-[#42474f] hover:bg-[#2c2f34] cursor-pointer">
                                        <p className="ml-5"> {[item.name]} </p>
                                    </li>
                                ))}
                            </ul>

                            





                            {/* Use this for the models from CGT 11600 (Purdue) */}
                            <h1 className="text-center content-center text-2xl md:text-3xl lg:text-4xl h-20 bg-[#787f8e] font-bold">Completed Models</h1>

                            <ul className="overflow-y-auto">
                                {projectData.completedModels.map((item, index) => (
                                    <li key={index} onClick={() => {setSelectedModels(index), setActiveSource('model')}} className="text-2xl overflow-x-auto hide-scrollbar whitespace-nowrap py-5 bg-[#42474f] hover:bg-[#2c2f34] cursor-pointer">
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
                                className="absolute z-20 md:text-lg text-sm p-6 bg-[#7c777c]/20 hover:bg-[#7c777c]/50 max-w-40 ml-2 rounded-md cursor-pointer">
                                <MdArrowBackIosNew />
                            </div>
                                
                                {activeSource === 'project' && currentProject && (
                                    <Image src={imgIndex.img[numImg]} height={300} width={300} className="h-full w-full object-fill" alt="pictures of the projects"/>
                                )}

                                {activeSource === 'model' && currentModel && (
                                    <div className="h-[300px] w-full">
                                    <Canvas camera={{ position: [0, 0, 5] }}>
                                        <ambientLight intensity={7} />
                                        <directionalLight position={[5, 5, 5]} />
                                        <Suspense fallback={null}>
                                        <Model path={imgModel.upload} />
                                        </Suspense>
                                        <OrbitControls />
                                    </Canvas>
                                    </div>
                                )}
                              
                                <div
                                onClick={progressInterval}
                                    className="absolute z-20 right-0 md:text-lg text-sm p-6 bg-[#7c777c]/20 hover:bg-[#7c777c]/50 max-w-40 mr-2 rounded-md cursor-pointer">
                                    <MdOutlineArrowForwardIos />
                                </div>
                            </div>



                               
                                
                            
                            <div className="text-2xl md:text-3xl lg:text-4xl bg-black overflow-y-auto overflow-x-hidden break-words whitespace-normal">
                                    {activeSource === 'project' && currentProject && (
                                        <>
                                        <div className="mx-3 w-full">
                                            <h1 className="text-2xl mt-3 lg:text-5xl">{currentProject.name}</h1>
                                            <br />
                                            <h2 className="text-2xl lg:text-5xl">
                                            Created: {currentProject.openDate} - {currentProject.closeDate}
                                            </h2>
                                        </div>
                                        <br />
                                        <p className="text-2lg ml-2 whitespace-pre-line">{currentProject.desc}</p>
                                        </>
                                    )}

                                    {activeSource === 'model' && currentModel && (
                                        <>
                                        <div className="mx-3 w-full">
                                            <h1 className="text-2xl mt-3 lg:text-5xl">{currentModel.name}</h1>
                                            <br />
                                            <h2>Created: {currentModel.openDate} - {currentModel.closeDate}</h2>
                                        </div>
                                        <br />
                                        <p className="text-2lg ml-2 whitespace-pre-line">{currentModel.desc}</p>
                                        </>
                                    )}
                                </div>


                            
                            
                    </div>
                </div>


                {topDown.FooterDefault()}
        </div>
    )
}