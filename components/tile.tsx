'use client'

import React from "react"
import Image from "next/image"


type TileInfoProps = {
    image: string
    text: string
    date: string
  }
  
export default function TileInfo({image, text, date}: TileInfoProps) {

    return(
        <div className="relative md:max-w-75 w-full rounded-lg md:max-h-full bg-linear-to-t from-sky-700 to-sky-500/13 transition-transform duration-400 ease hover:scale-102 cursor-pointer">
            <Image className="p-2" src={image} alt="Tile Image" width={400} height={400} />

            <div className="text-lg md:text-3xl text-center">
                <p>{text}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}