"use client"

import Image from "next/image"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import logo from "@/public/images/logo.png"
import { FaArrowLeft } from "react-icons/fa6"
import { IoSearchSharp } from "react-icons/io5"
import { GiHamburgerMenu } from "react-icons/gi"
import { motion, AnimatePresence } from "framer-motion"
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

    const [click, setClick] = useState<boolean>(false);
    const [hover, setHover] = useState<{ title: string, content: string[] } | null>(null);
    const [selectedItem, setSelectedItem] = useState<{ title: string, content: string[] } | null>(null);

    const close= () =>{
        setClick(false);
        setSelectedItem(null);
    }

    return(
        <header
            className="h-16 flex absolute top-0 w-full justify-between items-center z-10 text-sm text-white font-semibold px-6 2xl:px-40"
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
                        <div className="h-px w-full bg-gray-400 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left origin-right"/>
                    </li>
                ))}
            </ul>
            <GiHamburgerMenu
                onClick={() => setClick(true)}
                className="text-2xl cursor-pointer lg:hidden"
            />
            <Image src={logo} alt="Logo" width={48} height={48} className="cursor-pointer lg:mr-20 xl:mr-30 2xl:mr-44"/>
            <div className="flex items-center gap-x-6">
                <div className="relative group space-y-0.5 hidden lg:block">
                    <a href="">newsroom</a>
                    <span className="absolute left-0 bottom-0 h-px w-full bg-gray-400 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left origin-right"/>
                </div>
                <div className="relative group space-y-0.5 hidden lg:block">
                    <a href="">careers</a>
                    <span className="absolute left-0 bottom-0 h-px w-full bg-gray-400 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left origin-right"/>
                </div>
                <IoSearchSharp className="text-2xl cursor-pointer"/>
            </div>
            {hover && (
                <AnimatePresence>
                    <motion.div 
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="h-screen w-full absolute top-0 left-0 flex"
                    >
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
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            className="w-1/2 bg-black"
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            )}
            {click && (
                <div className="h-screen w-full absolute top-0 left-0 bg-blue-900 content-center text-3xl px-6">
                    {selectedItem ? (
                        <div className="absolute top-5 right-6 left-6 flex justify-between">
                            <FaArrowLeft
                                onClick={() => setSelectedItem(null)}
                                className="cursor-pointer hover:text-blue-500"
                            />
                            <IoMdClose
                                onClick={close}
                                className="cursor-pointer hover:text-blue-500"
                            />
                        </div>
                    ) : (
                        <IoMdClose
                        onClick={close}
                        className="cursor-pointer hover:text-blue-500 absolute top-5 right-6"
                    />
                    )}
                    {selectedItem ? (
                        <ul className="space-y-10">
                            {selectedItem.content.map((contentItem, index) =>(
                                <li
                                    key={index}
                                    className="cursor-pointer hover:text-blue-500"
                                >
                                    {contentItem}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul className="space-y-10">
                            {list.map((item, index) =>(
                                <li
                                    key={index}
                                    onClick={() => setSelectedItem(item)}
                                    className="flex justify-between items-center cursor-pointer hover:text-blue-500"
                                >
                                    {item.title}
                                    <MdOutlineKeyboardArrowRight />
                                </li>
                            ))}
                            <li className="cursor-pointer text-4xl hover:text-blue-500">newsroom</li>
                            <li className="cursor-pointer text-4xl hover:text-blue-500">careers</li>
                        </ul>
                    )}
                </div>
            )}
        </header>
    )
}