import '@/styles/globals.css'
import '../styles/Fonts.css'
//import 'swiper/css/bundle' // Import Swiper styles
//import "swiper/swiper.min.css"; // Import Swiper styles
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [view, setView] = useState<any[]>([]);
  const [objArr, setObjArr] = useState<any[]>([]);
  //Dark mode
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [rotateDegree, setRotateDegree] = useState<number>(0);
  const [rotateNeg, setRotateNeg] = useState<boolean>(false);
  
  return (
    <div className={`h-screen w-screen overflow-y-hidden overflow-x-hidden transition-colors duration-200 ${darkMode ? 'bg-[#121212] text-white' : 'bg-white text-black'}`}>
      <Component {...pageProps} 
        view={view} 
        setView={setView}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        rotateDegree={rotateDegree}
        setRotateDegree={setRotateDegree}
        rotateNeg={rotateNeg}
        setRotateNeg={setRotateNeg}
        />
    </div>
  )
}
