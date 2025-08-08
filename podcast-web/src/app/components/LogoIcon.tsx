import type { CircleImage } from "../types";
import { useEffect, useState } from 'react';

function LogoIcon(props: CircleImage) {
    const [viewportWidth, setViewportWidth] = useState<number>(0);

    useEffect(() => {
        setViewportWidth(window.innerWidth);
    }, []);
    const { src, alt, height, width, round } = props;
    let customHeightClass = height && "h-4";
    let customWidthClass = width && "w-4";
    let customRoundClass = round ? `rounded-${round}` : "";
    const hasPx =
        (height && height.includes('px')) ||
        (width && width.includes('px'));
    const isMdView = viewportWidth >= 768 ? true : false;

    if (hasPx && isMdView) {
        customHeightClass = 'h-6';
        customWidthClass = "w-6";
    } else if (!hasPx && !isMdView) {
        customHeightClass = `h-${height}`;
        customWidthClass = `w-${width}`;
    }



    return (<div>
        <img className={`${customHeightClass} ${customWidthClass} ${customRoundClass} `} src={src} alt={alt} />
    </div>)
}

export default LogoIcon;