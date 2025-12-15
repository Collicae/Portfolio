'use client'

import React from "react"
import Link from "next/link";


export function MainHeader() {

    return (
        <div className="h-20 flex items-center bg- bg-radial-[at_10%_25%] from-[#3c3c4b] to-zinc-900 to-75%">
            <Link href='/'>
                <h1 className="ml-10 text-3xl md:text-5xl cursor-pointer">C Collins</h1>
            </Link>
        </div>
    )
}

export function FooterDefault() {

    //Gets the current date (so that I dont have to do it every year)
    const currentYear = new Date().getFullYear()

    return (
        <div className="border-t-4">
            <div className="grid md:grid-cols-2 grid-cols-1">

                <div className="">
                    <div className="flex flex-col  md:items-start items-center ">
                        <h1 className="md:text-3xl text-3xl my-5 ml-5">Feel Free to Contact Me</h1>
                        <textarea name="emailBox" id="emailBox" placeholder="Type Here!" className="bg-white  text-black md:w-full w-80 h-50" ></textarea>
                    </div>
                    <div className="md:w-[100%] flex justify-center">
                        <button className="cursor-pointer mt-5 p-5 rounded-lg bg-[#6688aa] w-100 hover:bg-[#4f6f8f]">Submit</button>
                    </div>
                </div>

                <div className="flex flex-col justify-end items-end">
                    <h2 className="lg:text-4xl md:text-3xl md:ml-5 text-2xl">This portfolio contains work created by me unless otherwise stated. All third-party content is credited to its respective owners. This site is publicly accessible and does not intentionally contain confidential or sensitive information.</h2>

                   <h1 className="lg:text-4xl md:text-3xl md:ml-5 text-2xl">{currentYear} Caleb Collins. All Rights Reserved.</h1>
                    
                </div>

            </div>
        </div>
    )
}