import CarouselDisplay from "./Components/CarouselDisplay";

interface PageProps {
    // Include the [view, setView] state in the component's props
    view: any[];
    setView: React.Dispatch<React.SetStateAction<any[]>>;
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    rotateDegree: number;
    rotateNeg: boolean;
}

export default function Gallery({ view, setView, darkMode, setDarkMode, rotateDegree, rotateNeg}: PageProps){
    return(
        <div id="GalleryContainer" className={`h-screen w-screen transform origin ${rotateNeg ? '-' : ''}rotate-${rotateDegree}`}>
            <CarouselDisplay 
                view={view} 
                setView={setView} 
                darkMode={darkMode} 
                setDarkMode={setDarkMode}
                rotateDegree={rotateDegree}
                rotateNeg={rotateNeg}
            />
        </div>
    )
}