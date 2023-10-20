import React from "react";
import Image from "next/image";
import Link from "next/link";
import Landing from "../Landing";

interface PageProps {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ darkMode, setDarkMode}: PageProps) {

    const toggleDarkMode = () => {
        darkMode ? setDarkMode(false) : setDarkMode(true)
        document.documentElement.classList.toggle('dark', darkMode);
    };

    return(
        <div id="HeaderContainer" className={`flex flex-row h-[8vh] w-screen items-center justify-between transition-colors duration-200 ${darkMode? 'bg-[#202020]': 'bg-[#fafbf9]'}`}>
            <Link href="./Landing" className="h-full">
                <div id="HeaderLogoContainer" className="h-full px-2 py-2">
                    <img
                        src="/logo192.png"
                        className="h-full"
                    />
                </div>
            </Link>
            <div id="Routing list" className="flex flex-row flex-grow space-x-4 mx-4">
                <Link href="./Landing">Home</Link>
                <Link href="./GetNFT">Add NFT</Link>
                <Link href="./Options">Controls</Link>
            </div>
            <div id="DarkSwitch" onClick={()=>{toggleDarkMode()}} className="justify-end h-full p-3 flex items-center">
                <img
                    src={darkMode? `/7148715_night_mode_dark_moon.png` : `/7148739_light_bright_sun.png`}
                    className={`h-3/5 border-2 border-solid rounded-lg p-1 transition-colors duration-200 ${darkMode ? 'border-black invert': 'border-gray-400 invert-0'}`}
                />
            </div>
        </div>
    )
};
