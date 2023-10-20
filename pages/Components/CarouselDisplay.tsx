import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Navigation, Autoplay } from "swiper/modules"; //Import Swiper Modules
import "swiper/css"; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { useRouter } from "next/router"


interface PageProps {
    view: any[];
    setView: React.Dispatch<React.SetStateAction<any[]>>;
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    rotateDegree: number;
    rotateNeg: boolean;
}

export default function CarouselDisplay({ view, setView, darkMode, setDarkMode, rotateDegree, rotateNeg }: PageProps) {

    const router = useRouter();
    const isGalleryRoute = router.pathname === '/Gallery';

    return(
        <div id='GalleryCarousel' className={`h-full w-full`}>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000}}
                speed={3000}
                className={isGalleryRoute ? "h-screen" : "h-full"}
            >
                {view.map((nft, index) => (
                <SwiperSlide key={index}>
                    <div id="FullCardDiv" className="flex flex-col items-center h-full w-full">
                        <div id="NFTImageContainer" className="flex flex-col items-center justify-center h-[65%]">
                            <img 
                                src={nft[0].offChainMetadata.metadata.image}
                                className="h-[90%] w-full"
                                >
                            </img>
                        </div>
                        <div id="cardDataContainer"
                            className="flex flex-col justify-center align-middle h-[35%] w-full">
                            <div id="cardName" className={`flex justify-center items-center ${isGalleryRoute ? "text-4xl" : "text-xl"} p-2`}>
                                {nft[0].offChainMetadata.metadata.name}
                            </div>
                            <div id="qrCode" className="flex justify-center h-full w-full">
                                <img src={nft[0].offChainMetadata.metadata.qr}
                                    className=" h-[50%] align-middle items-center mt-6"
                                />
                            </div>
                        </div>
                    </div>
                    
                </SwiperSlide>))}
            </Swiper>
        </div>
    )
}