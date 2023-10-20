//This is where the slider options like speed and order will go.
import Header from "./Components/Header";
import CarouselDisplay from "./Components/CarouselDisplay";
import Link from "next/link";
import { useState } from "react"

interface PageProps {
    // Include the [view, setView] state in the component's props
    view: any[];
    setView: React.Dispatch<React.SetStateAction<any[]>>;
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    rotateDegree: number;
    setRotateDegree: React.Dispatch<React.SetStateAction<number>>;
    rotateNeg: boolean;
    setRotateNeg: React.Dispatch<React.SetStateAction<boolean>>;
    style?: React.CSSProperties;
  }  

export default function SliderOptions({ view, setView, darkMode, setDarkMode, style, rotateNeg, setRotateNeg, rotateDegree, setRotateDegree}: PageProps) {

    // const [rotateDegree, setRotateDegree] = useState<number>(0)
    // const [rotateNeg, setRotateNeg] = useState<boolean>(false)

    const rotateHandler = async() => {
      degreeHandler();

      
      console.log(rotateDegree,rotateNeg)
    }

    const degreeHandler = () => {
      if(rotateDegree >= 180){
        setRotateDegree(rotateDegree-90)
        setRotateNeg(true)
      }else if(rotateNeg === true && rotateDegree === 90){
        setRotateDegree(0)
        setRotateNeg(false)
      }else{
        setRotateDegree(rotateDegree+90)
      }
    }

    return(
        <div className="h-screen">
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div className="flex flex-col items-center h-[92vh]">
          <h1 className="flex items-end text-3xl h-12 m-2">CUSTOMIZE</h1>
          <p>Use the provided options to customize your gallery!</p>
          <div id="OptionsContainer" className="flex w-screen justify-center m-4"></div>
          <div id="CarouselDisplayPreview" className={`flex border border-black h-3/6 sm:w-3/6 md:w-3/6 lg:w-3/12 m-10 transform origin ${rotateNeg ? '-rotate-' : 'rotate-'}${rotateDegree}`}>
            <CarouselDisplay 
                view={view} 
                setView={setView} 
                darkMode={darkMode} 
                setDarkMode={setDarkMode}
                rotateDegree={rotateDegree}
                rotateNeg={rotateNeg}
            />
          </div>
          <div id="OptionsContainerBox" className="flex flex-col h-1/6">
            <div id="rotateOption" className="flex flex-row h-1/2 justify-center items-center">
              <p className="h-1/3">ROTATE:</p>
              <div id="customrotatebuttonlogic" onClick={()=>{rotateHandler()}} className="h-full flex justify-center items-center hover:cursor-pointer">
                <img src="/7148714_repeat_rotate_refresh_reload_update.png" className="h-1/3 m-2"/>
              </div>
              
            </div>
            <div id="speedOption" className="flex flex-row h-1/2 justify-center items-center">
              <p>ADJUST SPEED:</p>
            </div>
            {/* <button
            onClick={()=>{rotateHandler()}}
            className="
            bg-blue-200
            "
            > Rotate: </button> */}
          </div>
          <div id="submitButtonContainer" className="flex flex-row w-4/5 justify-around">
            <div id="SubmitButton">
              <Link href={`./GetNFT`}
                className="
                flex h-12 
                w-44 
                items-center 
                justify-center 
                rounded-lg 
                bg-[#DC1FFF] 
                hover:bg-[#03E1FF] hover: duration-700
                ">
                  BACK</Link>
            </div>
            <div id="proceedButton">
              <Link href='./Gallery'
                className="
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
};