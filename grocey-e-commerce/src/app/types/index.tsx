export interface Category {
    url: string;
    price: string;
    description: string
}

export interface Product {
    url: string,
    name: string,
    price: string,
    rate: string,
    alt: string,
    hearted?: boolean
}

export interface Heart {
    index: number,
    isHearted?: boolean,
    onChange: (index: number) => void
}

export interface ArrowUp {
    bottom?: string,
    borderSize?: string
    isOpenFilter?: boolean
}

export interface IPriceFilter {
    minCost: string,
    maxCost: string,
    onChangeMinCost: (minPrice: string) => void,
    onChangeMaxCost: (maxPrice: string) => void
}

export interface IOpenFilter {
    isOpenFilter: boolean,
    onChange: (isOpenFilter: boolean) => void
}