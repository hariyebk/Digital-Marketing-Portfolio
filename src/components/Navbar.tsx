'use client'

import { useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";
import {setCookie, getCookie} from "cookies-next"
import { IoMoonSharp } from "react-icons/io5";

export default function Navbar() {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

    useEffect(() => {
        const theme = getCookie("theme")
        if(theme){
            if(theme === "dark"){
                setIsDarkMode(false)
            }
            else return
        }
    }, [])

    useEffect(() => { 
        if(isDarkMode){
            toggleLight()
        }
        else {
            toggleDark()
        }
    }, [isDarkMode])

    function toggleDark(){
        setCookie('theme', 'dark', { maxAge: 60 * 60 * 24 * 365 })
        document.documentElement.setAttribute('data-theme', 'dark')
        window.dispatchEvent(new Event('themeChange'))
    }
    
    function toggleLight(){
        setCookie('theme', 'light', { maxAge: 60 * 60 * 24 * 365 })
        document.documentElement.setAttribute('data-theme', 'light')
        window.dispatchEvent(new Event('themeChange'))
    }

    return (
        <nav className="pt-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl text-secondary dark:text-white font-medium"> Harun Bekre </h2>
                <button onClick={() => setIsDarkMode((theme) => !theme)} className="p-2.5 rounded-full hover:bg-blue-300 hover:bg-opacity-30 focus-visible:border-secondary">
                    {!isDarkMode ? <LuSun className="w-6 h-6 text-white" /> : <IoMoonSharp className="w-6 h-6 text-secondary" />}
                </button>
            </div>
            <hr className="mt-3 w-full border-t border-t-gray-400 opacity-50" />
        </nav>
    )
}
