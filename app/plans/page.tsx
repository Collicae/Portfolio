'use client'


import React from "react"


// double "../",  refer to outside the folder 
//import * as planData from '../../overflow/plansOver'
import * as topDown from '../../components/pageDefaults'
import ParallaxScroll from "@/components/parallaxScroll"


export default function FuturePlans() {


    return (
        <div>
            {topDown.MainHeader()}

                {/* List of current and future projects completed / In-progress / and Planned */}
                
                <ParallaxScroll />

                <div className="flex justify-center my-10">
                    <h2 className="text-xl md:text-3xl lg:text-4xl">More items will be announced shortly after confirmation</h2>
                </div>

                {/* List of different languages / Frameworks that I plan on studying  */}
                <div>
                    <h1>Future Languages and Frameworks planned on learning</h1>

                </div>

            {topDown.FooterDefault()}
        </div>
    )
}