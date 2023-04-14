import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StaticImageData } from "next/image";


type SafeNumber = number;


interface Props {
    href: string;
    imgSrc: StaticImageData | string;
    width?: SafeNumber;
    height?: SafeNumber;
    icon?: IconDefinition;
    upperText: string;
    lowerText: string; 
}


const LinkPanel = ({href, imgSrc, width, height, icon, upperText, lowerText}: Props) => {
    return (
        <>
            {/* LinkPanel */}
            <Link href={href} className="relative group rounded-lg shadow-lg object-fit overflow-hidden col-start-2 col-span-1 ">
                {imgSrc === "StaticImageDate" 
                    ? <Image src={imgSrc} alt="" className="duration-300 group-hover:opacity-80 group-hover:scale-110"/>
                    : <Image src={imgSrc} alt="" width={width} height={height} className="duration-300  group-hover:opacity-80 group-hover:scale-110"/>}
                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white  bg-mainBrawn opacity-0
                                group-hover:opacity-100 duration-300  bg-opacity-80">
                    <div className="flex items-center justify-between w-full">
                        <div className="font-normal space-y-1">
                            <p className="text-sm">{upperText}</p>
                            <p className="text-xs">{lowerText}</p>
                        </div>
                        {icon !== undefined && <FontAwesomeIcon icon={icon} className="w-5"/>}
                    </div>
                </div>                  
            </Link>        
        </>
    );
}

export default LinkPanel;