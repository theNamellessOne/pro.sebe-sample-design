import Image from "next/image";
import BannerImg from "../../public/banner.png";
import {Mouse} from "lucide-react";

export function Banner() {
   return (
       <div className={"relative"}>
          <Image src={BannerImg} className={"w-screen h-[70vh]"}  alt={""}/>
          <Mouse className={"absolute bottom-0 right-1/2 stroke-white mb-2"} size={56}/>
       </div>
   )
}