import { data } from "autoprefixer";
import { useState, useEffect } from "react"

interface PageProps {
    view: any[];
    setView: React.Dispatch<React.SetStateAction<any[]>>;
  }

export default function PreviewContainer({ view, setView }: PageProps) {

  const deleteHandler = (e:any) => {
    const dataIndex = parseInt(e.currentTarget.getAttribute('data-data'));
    const newView = view.filter((nft,index) => {return index !== dataIndex })
    setView(newView)
  }

  return (
    <div id="nftPreviewContainer" className="flex justify-center m-10 h-4/5 lg:w-9/12 md:w-11/12 sm:w-7/12">
      <div id="nftConfirm" className="flex flex-wrap justify-evenly w-full overflow-scroll">
        {view.map((item,viewIndex)=>{console.log(item); return (
          <div id="Wrapper" className="flex flex-col w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-[50%] m-3 justify-center" key={viewIndex}>
              <div id="Card" className="relative border border-[#cfcfcf] h-full w-full group rounded-sm">
                  <div id="NFTCardOrder" className="flex flex-col h-full w-full">
                      <div id="image" className="flex h-4/5 justify-center m-1">
                        <img src={item[0].offChainMetadata.metadata.image} className="max-h-full max-w-full object-cover p-1"></img>
                      </div>
                      <div id="PreviewName"className="flex justify-center items-end h-1/5 overflow-hidden text-base text-[.5em] sm:text-[1em] p-1">{item[0].offChainMetadata.metadata.name}</div>
                      <div id="deleteButtonPreview"
                            className="
                                    absolute
                                    flex 
                                    justify-center
                                    items-center
                                    h-1/5 
                                    w-full
                                    bg-red-500
                                    text-white 
                                    opacity-0 
                                    group-hover:opacity-90 
                                    transition-opacity 
                                    duration-300 
                                    rounded-sm"
                            data-data={viewIndex}
                            onClick={(e)=>{deleteHandler(e)}}>
                        DELETE
                      </div>
                  </div>
              </div>
          </div>)})}
      </div>
    </div>
  )
}