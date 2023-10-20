import { error } from "console";
import { useEffect, useState } from "react"
import PreviewContainer from "./Components/PreviewContainer";
import Header from "./Components/Header";
import Link from "next/link";
import QRCode from 'qrcode';

interface PageProps {
  view: any[];
  setView: React.Dispatch<React.SetStateAction<any[]>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GetNFT({ view, setView, darkMode, setDarkMode}: PageProps) {

  const [address, setAddress] = useState<string>("");

    const GenerateQRCode = async(x: string) => {
      let nftAddressString = `https://solscan.io/token/${x}`
      try {
        const qrDataUrl = await QRCode.toDataURL(nftAddressString);
        return qrDataUrl 
      } catch (err) {
        console.error(err)
        return ''
      }
    };

    const fetchNFT = async() => {
      try {
              const res = await fetch(`https://api.helius.xyz/v0/token-metadata?api-key=${process.env.NEXT_PUBLIC_API_KEY}`,{
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                          "mintAccounts": [address],
                          includeOffChain: true,
                          disableCache: false
                  })
              });

              const resData = await res.json();
              return resData

        }catch (error) {
          console.error('Error sending data:',error);
      }
    };

    const submitHandler = async() => {
      if(address){
        try{
          const res = await fetchNFT();
          if (!res[0]?.onChainMetadata?.metadata) {
            console.log("error");
            return;
          }
          //Generate the QR code using the current address
          const thisQR = await GenerateQRCode(address);
          // add the QR code directly to the address
          if(res[0]?.offChainMetadata?.metadata){
            res[0].offChainMetadata.metadata["qr"] = thisQR;
          }
          setView(current => [...current, res])
        }catch{
          alert("Couldn't find the NFT with the token address provided. Please make sure they address is correct.")
        }
      }
    };


    return (
      <div className="h-screen">
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div className="flex flex-col items-center h-[92vh]">
          <h1 className="flex items-end text-3xl h-12 m-2">STATIC PREVIEW</h1>
          <p>Input the NFT token address:</p>
          <div id="inputContainer" className="flex w-screen justify-center m-4">
            <input 
              value={address} 
              name="inputbox" 
              placeholder="TOKEN ADDRESS" 
              type="text"
              onChange={(e) => {setAddress(e.target.value)}}
              className="flex justify-center w-4/5 h-12 text-center bg-[#ffffff] 
                          border border-[#ebebeb] rounded-lg
                          focus: outline-none
                          text-black
                          "
            >
            </input>
          </div>
          <div id="submitButtonContainer" className="flex flex-row w-4/5 justify-around">
            <div id="SubmitButton">
              <button onClick={()=>{submitHandler()}}
                className="
                flex h-12 
                w-44 
                items-center 
                justify-center 
                rounded-lg 
                bg-[#DC1FFF] 
                hover:bg-[#03E1FF] hover: duration-700
                ">
                  Submit</button>
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
          <PreviewContainer view={view} setView={setView}/>
        </div>
      </div>
    )
}