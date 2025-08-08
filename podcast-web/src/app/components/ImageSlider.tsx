import Image from "next/image";
import Link from "next/link";
import { ImageSliderProps } from "../types";
import React from "react";

function ImageSlider(props: ImageSliderProps) {

    const { indexDot, isShowAll, isMdView } = props;
    const defaultImgPath = `/images/sections/section-4/`;

    const imgSliders = [{
        name: 'episode-1.png',
        path: '/episode-1',
        timeConsuming: 'Episode1 - 1hr 25min',
        title: 'Should you get outboard audio gear?',
        subTitle: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends.'
    },
    {
        name: 'episode-2.png',
        path: '/episode-2',
        timeConsuming: 'Episode2 - 1hr 25min',
        title: 'Should you get outboard audio gear?',
        subTitle: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends.'
    },
    {
        name: 'episode-3.png',
        path: '/episode-3',
        timeConsuming: 'Episode3 - 1hr 25min',
        title: 'Should you get outboard audio gear?',
        subTitle: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends.'
    }, {
        name: 'episode-4.png',
        path: '/episode-4',
        timeConsuming: 'Episode4 - 1hr 25min',
        title: 'Should you get outboard audio gear?',
        subTitle: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends.'
    }
    ];
    const isSliderIndividualActive = indexDot != 0 && !isShowAll ? "opacity-0 pointer-events-none translate-x-[-120%]" : "";


    return (
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-1 lg:gap-5 my-10 transition-all ease-in-out duration-1000 ${isSliderIndividualActive} `}>
            {imgSliders.map((imgSlide, index) => (
                <React.Fragment key={index}>
                    <div style={{ backgroundImage: `url(${defaultImgPath + imgSlide.name})` }} className={` lg:w-full w-40 h-44 rounded bg-cover bg-center ${index != 0 && !isShowAll && !isMdView ? `hidden` : 'block'} `}>
                    </div>
                    <Link href={`${imgSlide.path}`} className={`${index != 0 && !isShowAll && !isMdView ? `hidden` : 'block'} `}>
                        <div className="w-40 h-44 flex flex-col justify-center lg:w-full">
                            <div className="text-orange-500 text-[10px] font-normal font-['Manrope'] leading-[10px] lg:text-sm">{imgSlide.timeConsuming}</div>
                            <h3 className="w-40 lg:w-full text-gray-900 text-xs font-bold font-['Plus_Jakarta_Sans'] leading-none mt-2.5 mb-5 lg:text-xl">{imgSlide.title}</h3>
                            <p className="w-40 lg:w-full text-zinc-500 text-[10px] font-normal font-['Plus_Jakarta_Sans'] leading-none mb-5 lg:text-base">{imgSlide.subTitle}</p>
                            <div className="flex">
                                <div className="text-violet-500 text-[10px] font-semibold font-['Plus_Jakarta_Sans'] leading-[10px] mr-2.5 lg:text-sm">Listen now</div>
                                <Image src={'/images/icons/section-4/Play.svg'} height="0" width="0" alt="Playing episode icon"
                                    className="w-2.5 h-2.5"
                                />
                            </div>
                        </div>
                    </Link>
                </React.Fragment>
            ))}
        </div>
    );
}

export default ImageSlider;