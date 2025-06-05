"use client"

import Image from "next/image"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import logo from "@/public/images/logo.png"
import { IoSearchSharp } from "react-icons/io5"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

export const Header: React.FC= () =>{
    const list= [
        {
            title: "who we are",
            content: [
                "our culture",
                "our brands",
                "our leadership",
                "our history",
                "contact us"
            ]
        },
        {
            title: "what we do",
            content: [
                "energy",
                "technology and innovation",
                "chevron around the world"
            ]
        },
        {
            title: "sustainability",
            content: [
                "climate",
                "environment",
                "social investment"
            ]
        },
        {
            title: "investors",
            content: [
                "events and presentations",
                "corporate governance",
                "esg a–z index",
                "reports and filings",
                "stock and dividend",
                "contact us"
            ]
        }
    ]

    const [click, setClick]= useState<boolean>(false);
    const [hover, setHover] = useState<{ title: string, content: string[] } | null>(null);

    return(
        <header
            className="h-16 flex absolute top-0 w-full justify-between items-center text-sm text-white font-semibold px-6 2xl:px-40 bg-black"
        >
            <ul className="items-center gap-x-6 hidden lg:flex">
                {list.map((item, index) => (
                    <li
                        key={index}
                        className="relative group space-y-0.5 z-20"
                        onMouseEnter={() => setHover(item)}
                        onMouseLeave={() => setHover(null)}
                    >
                        <a href="">{item.title}</a>
                        <div className="w-0 h-px bg-gray-400 transition-all duration-500 group-hover:w-full"></div>
                    </li>
                ))}
            </ul>
            <GiHamburgerMenu
                onClick={() => setClick(true)}
                className="text-2xl cursor-pointer lg:hidden"
            />
            <Image src={logo} alt="Logo" width={48} height={48} className="cursor-pointer"/>
            <div className="flex items-center gap-x-6">
                <div className="relative group space-y-0.5 hidden lg:block">
                    <a href="">newsroom</a>
                    <div className="w-0 h-px bg-gray-400 transition-all duration-500 group-hover:w-full"></div>
                </div>
                <div className="relative group space-y-0.5 hidden lg:block">
                    <a href="">careers</a>
                    <div className="w-0 h-px bg-gray-400 transition-all duration-500 group-hover:w-full"></div>
                </div>
                <IoSearchSharp className="text-2xl cursor-pointer"/>
            </div>
            {hover && (
                <div className="h-screen w-full absolute top-0 left-0 z-10 flex">
                    <div
                        onMouseLeave={() => setHover(null)}
                        onMouseEnter={() => setHover(hover)}
                        className="w-1/2 bg-blue-900 space-y-10 content-center px-10 2xl:px-40"
                    >
                        {hover.content.map((text, index) => (
                            <a
                                href=""
                                key={index}
                                className="text-4xl block hover:text-blue-500"
                            >
                                {text}
                            </a>
                        ))}
                    </div>
                    <div className="w-1/2 bg-black opacity-60"></div>
                </div>
            )}
            {click && (
                <div className="h-screen w-full absolute top-0 left-0 z-10 bg-blue-900 content-center">
                    <IoMdClose
                        onClick={() => setClick(false)}
                        className="text-3xl cursor-pointer hover:text-blue-500 absolute top-5 right-6"
                    />
                    <ul className="space-y-10 px-6">
                        {list.map((item, index) =>(
                            <li
                                key={index}
                                className="flex justify-between items-center cursor-pointer text-4xl hover:text-blue-500"
                            >
                                {item.title}
                                <MdOutlineKeyboardArrowRight/>
                            </li>
                        ))}
                        <li className="cursor-pointer text-4xl hover:text-blue-500">newsroom</li>
                        <li className="cursor-pointer text-4xl hover:text-blue-500">careers</li>
                    </ul>
                </div>
            )}
        </header>
    )
}
