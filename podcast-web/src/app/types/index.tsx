import { Dispatch, SetStateAction } from 'react';
export interface CircleImage {
    src: string,
    alt: string,
    translateX?: string,
    leftPosition?: string,
    children?: string,
    height?: string,
    width?: string,
    round?: string
}

export interface ImageSliderProps {
    isShowAll: boolean;
    indexDot: number;
    isMdView?: boolean;
}


export interface ParentStateProps {
    activeIndex: number;
    onChange: Dispatch<SetStateAction<number>>;
}
