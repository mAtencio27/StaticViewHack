import { error } from "console";
import { useEffect, useState } from "react"
import Link from 'next/link'
import Header from "./Components/Header";

interface PageProps {
  // Include the [view, setView] state in the component's props
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Landing({ darkMode, setDarkMode}: PageProps) {
    
    return (
      <div className="h-screen">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <div className={`flex flex-col items-center h-[92vh]`}>
          <h2 className="h-32 flex items-center">The NFT gallery you can install anywhere.</h2>
          <p className="w-4/5">Thank you for using Static Viewer for your event purposes. Please refer to the readme on the github to learn how to use this app. If you need help adjusting this to your event needs please get in contact with us.</p>
          <div id="buttonConatiner" className="flex h-36 w-4/5 items-center justify-center">
            <div id="buttonWrapper" className="flex h-12 w-44">
              <Link href='./GetNFT' className="
              flex h-12 
              w-44 
              items-center 
              justify-center 
              rounded-lg 
              bg-[#00ffa3] 
              hover:bg-[#03E1FF] hover: duration-700
              ">
                Proceed
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}