'use client'

import React from "react"
import Link from "next/link"

export interface CardItem {
  name: string
  desc?: string
  date?: string
  link?: string     // external link-out (e.g. Sketchfab profile/model page)
  image?: string     // static thumbnail
  embed?: string     // iframe src, e.g. Sketchfab model embed URL
}

interface HorizontalCardRowProps {
  title: string
  items: CardItem[]
}

export default function HorizontalCardRow({ title, items }: HorizontalCardRowProps) {
  return (
    <div className="w-full mt-10">
      <h1 className="text-4xl md:text-6xl ml-5 mb-6">{title}</h1>

      <div className="flex overflow-x-auto space-x-6 px-5 pb-4 hide-scrollbar items-start">
        {items.map((item, index) => {
          const CardInner = (
            <div className="min-w-[300px] max-w-[300px] bg-[#282832] hover:bg-[#3a3a48] transition-colors duration-300 rounded-2xl overflow-hidden cursor-pointer flex-shrink-0">
              {item.embed ? (
                <iframe
                  title={item.name}
                  src={item.embed}
                  className="w-full h-56"
                  frameBorder="0"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                />
              ) : item.image ? (
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className="w-full h-40 bg-cover bg-center"
                />
              ) : null}

              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
                {item.date && (
                  <p className="text-sm text-[#9a9aa5] mb-2">{item.date}</p>
                )}
                {item.desc && (
                  <p className="text-sm text-[#cfcfd8] whitespace-pre-line">{item.desc}</p>
                )}
              </div>
            </div>
          )

          // If there's an embed, don't wrap the whole card in a Link —
          // the iframe needs to stay interactive (rotating the 3D model, etc.)
          if (item.embed) {
            return <div key={index}>{CardInner}</div>
          }

          return item.link ? (
            <Link key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              {CardInner}
            </Link>
          ) : (
            <div key={index}>{CardInner}</div>
          )
        })}
      </div>
    </div>
  )
}