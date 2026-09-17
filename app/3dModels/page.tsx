'use client'

import React from "react"
import Link from "next/link"
import * as topDown from '../../components/pageDefaults'
import * as modelProj from "../../overflow/projectOver"
import HorizontalCardRow, { CardItem } from "../../components/horizontalfoods"

export default function myModels() {

  // Map your existing data into the shared card shape
  const modelCards: CardItem[] = completedModels.map((m) => ({
    name: m.name,
    desc: m.desc,
    date: m.closeDate,
  }))

  const projectCards: CardItem[] = modelProj.completedModels.map((p: any) => ({
    name: p.text,
    date: p.date,
    image: p.image,
  }))

  return (
    <>
      <div>
        {topDown.MainHeader()}

        <div className="flex justify-center mt-10 rounded-xl">
          <div className="bg-[blue] w-[50%] flex justify-center rounded-xl cursor-pointer p-5">
            <Link href="https://sketchfab.com/Collicae100">
              <h1>SketchFab Main Home Link</h1>
            </Link>
          </div>
        </div>

        <HorizontalCardRow title="Completed Models" items={modelCards} />
      </div>
    </>
  )
}

export const completedModels = [
  {
    name: 'Introductory to Maya',
    desc: 'First time using AutoDesk Maya to make a model of my name and uploading it to Sketchfab. \nLink to Model: https://skfb.ly/pNpN8',
    openDate: '08/25/2026',
    closeDate: '08/31/2026',
  },
  {
    name: "Block Out ProcessBook",
    desc: "Tasked with making a block out of a scene. So I was going to start on my final but wanted to do something space themed so just messed around there. But space is not my final theme. \nLink to Model: https://skfb.ly/pNNUF",
    openDate: '08/28/2026',
    closeDate: '09/17/2026',
  },
]

interface ModelItem {
  name: string
  upload: string
}
export const modelImgs: ModelItem[] = [
  { name: "Name Model", upload: "/completed/models/wk1__logo.glb" },
]