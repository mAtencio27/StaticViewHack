import Landing from "./Landing"
import { useState, useEffect } from "react"

interface PageProps {
  // Include the [view, setView] state in the component's props
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Home({ darkMode, setDarkMode}: PageProps) {

  return (
    <div>
      <div>
        <Landing darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
    </div>
  )
}
