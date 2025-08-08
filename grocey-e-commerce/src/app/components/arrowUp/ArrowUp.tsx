import type { ArrowUp } from "@/app/types";
import { useEffect, useState } from "react";


function ArrowUp(props: ArrowUp) {
    const [borderColor, setBorderColor] = useState('');
    const [isDarkModeOn, setIsDarkModeOn] = useState(Boolean);

    useEffect(() => {
        setIsDarkModeOn(document.documentElement.classList.contains('dark'));
    })


    useEffect(() => {
        isDarkModeOn ? setBorderColor('var(--bg-dark-mode-secondary)') : setBorderColor('white');
    }, [isDarkModeOn])

    const { bottom = "-110%", borderSize = "8px" } = props;

    return (
        <div
            className="w-0 h-0 absolute z-50 left-1/2 -translate-x-1/2 hidden group-hover:block"
            style={{
                borderLeft: borderSize + ' solid transparent',
                borderRight: borderSize + ' solid transparent',
                borderBottom: borderSize + ` solid ${borderColor}`,
                bottom: bottom,
            }}
        ></div>

    )
};

export default ArrowUp;