import Image from "next/image";
const LogoSVG = function ({ path, name, title }: { path: string; name: string, title: string }) {
    return (
        <div className="flex items-center md:justify-self-start">
            <Image src={path} height="0" width="0" alt={name} style={{ height: '30px', width: '32px', marginRight: "10px" }} />
            <div className="h-4 text-gray-950 md:text-sm">{title}</div>
        </div>
    )
}

const LogoImg = function ({ bgColor, path, alt, title }: { bgColor: string, path: string, alt: string, title: string }) {
    return (
        <div className="flex items-center  md:justify-self-start">
            <div style={{ backgroundColor: bgColor }} className={`w-9 h-9 rounded-full flex justify-center items-center mr-2.5`}>
                <img className="w-4/5 h-4/5 rounded-full" src={path} alt={alt} />
            </div>
            <div className="h-4 text-gray-950 md:text-sm">{title}</div>
        </div>)
}

export { LogoSVG, LogoImg };