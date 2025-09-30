"use client"

import React, {useState, useEffect} from 'react'
import { Typewriter } from 'react-simple-typewriter'


type WordTyperProps = {
    words: string[];
};

export default function Wordtyper({ words }: WordTyperProps) {
    const handleType = (charCount: number) => {
      console.log("Typed char count:", charCount);
    };
  
    return (
      <div className="text-white font-mono whitespace-pre-wrap">
        <Typewriter
          key={words[0]}
          words={words}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={0}
          delaySpeed={10000}
          onType={handleType}
        />
      </div>
    );
  }
