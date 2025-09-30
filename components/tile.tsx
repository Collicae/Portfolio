'use client'

import React, {useState, useEffect} from "react"


type TileInfoProps = {
    image: string
    text: string
    date: string
  }
  
export default function TileInfo({image, text, date}: TileInfoProps) {

    return(
        <div className="relative md:max-w-75 w-full rounded-lg md:max-h-full bg-linear-to-t from-sky-700 to-sky-500/13 transition-transform duration-400 ease hover:scale-102 cursor-pointer">
            <img className="p-2 " src={image} alt="Tile Image" />

            <div className="text-lg md:text-3xl text-center">
                <p>{text}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}