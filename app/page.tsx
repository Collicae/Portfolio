"use client"

//Extra data for the home page

import * as topDown from '../components/pageDefaults'
import * as homeData from '../overflow/homeOver'




//General imports
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
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
  

  return (
    <div className="">
      <main className="">

          {topDown.MainHeader()}
          
          

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
                    ['--hover-bg']: item.back
                  } as React.CSSProperties}
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
