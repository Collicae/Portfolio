'use client'

import React from "react"
import Image from "next/image";

type ProjectItem = {
    image: string;
    text: string;
    date: string;
  };

type InformationModalProps = {
    item: ProjectItem;
    onClose: () => void;
  };

export default function Informationmodal({item, onClose}: InformationModalProps) {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-linear-to-t from-sky-500 to-indigo-500 rounded-lg p-1 max-w-lg w-full relative">
          <button onClick={onClose} className="absolute top-2 right-3 text-gray-600 hover:text-black">
            ✕
          </button>
          <Image src={item.image} alt="Tile" width={300} height={300} className="w-full rounded mb-4" />
          <h2 className="text-lg text-black font-bold mb-2">{item.text}</h2>
          <p className="text-black mb-1"> Started: {item.date}</p>
          {/* Add more details here if available */}
        </div>
      </div>
    )
}