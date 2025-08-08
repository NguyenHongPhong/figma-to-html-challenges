import Image from "next/image";
import { useEffect, useState } from "react";
import type { IPriceFilter } from '@/app/types/index'
function PriceCrossBar(props: IPriceFilter) {
    const { minCost, maxCost, onChangeMinCost, onChangeMaxCost } = props;
    const minPrice = 10;
    const maxPrice = 100;

    useEffect(() => {
        const slider = document.getElementById("slider");
        const minThumb = document.getElementById("min-price");
        const maxThumb = document.getElementById('max-price');

        if (minThumb && slider && maxThumb) {
            const handleDraggingForMin = (e: MouseEvent) => {
                e.stopPropagation();
                const rect = slider.getBoundingClientRect();
                let x = e.clientX - rect.left;
                x = Math.max(0, Math.min(x, rect.width));
                minThumb.style.left = x + 'px';
                let priceMin = (x / slider.offsetWidth) * (maxPrice - minPrice) + minPrice;
                onChangeMinCost(priceMin.toFixed(2));
            };

            const handleDraggingForMax = (e: MouseEvent) => {
                e.stopPropagation();
                const rect = slider.getBoundingClientRect();
                let x = e.clientX - rect.left;
                x = Math.max(0, Math.min(x, rect.width));
                maxThumb.style.left = x + 'px';
                let priceMax = (x / slider.offsetWidth) * (maxPrice - minPrice) + minPrice;
                onChangeMaxCost(priceMax.toFixed(2));
            };

            minThumb.onmousedown = (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.addEventListener('mousemove', handleDraggingForMin);
                const handleMouseUp = (e: MouseEvent) => {
                    e.stopPropagation();
                    document.removeEventListener('mousemove', handleDraggingForMin);
                    document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mouseup', handleMouseUp);
            }
            maxThumb.onmousedown = (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.addEventListener('mousemove', handleDraggingForMax);
                const handleMouseUp = (e: MouseEvent) => {
                    e.stopPropagation;
                    document.removeEventListener('mousemove', handleDraggingForMax);
                    document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mouseup', handleMouseUp);
            }

        }
    }, [])

    useEffect(() => {
        const slider = document.getElementById("slider");
        const minThumbLightMode = document.getElementById("min-price-light-mode");
        const maxThumbLightMode = document.getElementById('max-price-light-mode');
        if (minThumbLightMode && slider && maxThumbLightMode) {


            const handleDraggingForMin = (e: MouseEvent) => {
                e.stopPropagation();
                const rect = slider.getBoundingClientRect();
                let x = e.clientX - rect.left;
                x = Math.max(0, Math.min(x, rect.width));
                minThumbLightMode.style.left = x + 'px';
                let priceMin = (x / slider.offsetWidth) * (maxPrice - minPrice) + minPrice;
                onChangeMinCost(priceMin.toFixed(2));
            };

            const handleDraggingForMax = (e: MouseEvent) => {
                e.stopPropagation();
                const rect = slider.getBoundingClientRect();
                let x = e.clientX - rect.left;
                x = Math.max(0, Math.min(x, rect.width));
                maxThumbLightMode.style.left = x + 'px';
                let priceMax = (x / slider.offsetWidth) * (maxPrice - minPrice) + minPrice;
                onChangeMaxCost(priceMax.toFixed(2));
            };

            minThumbLightMode.onmousedown = (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.addEventListener('mousemove', handleDraggingForMin);
                const handleMouseUp = (e: MouseEvent) => {
                    e.stopPropagation();
                    document.removeEventListener('mousemove', handleDraggingForMin);
                    document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mouseup', handleMouseUp);
            }
            maxThumbLightMode.onmousedown = (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.addEventListener('mousemove', handleDraggingForMax);
                const handleMouseUp = (e: MouseEvent) => {
                    e.stopPropagation;
                    document.removeEventListener('mousemove', handleDraggingForMax);
                    document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mouseup', handleMouseUp);
            }

        }
    }, [])

    return (
        <div className="flex flex-col">
            <div id="slider" className="w-full h-0.5 bg-[#D2D1D6] dark:bg-zinc-300 my-6 relative">
                <Image id="min-price" src={`/images/icons/filter/oval - UIHUT.svg`} height={"0"} width={"0"}
                    alt="min-circle" className="w-5 h-5 absolute top-0 -translate-y-[9px] hover:cursor-pointer hidden dark:block"
                />

                <Image id="max-price" src={`/images/icons/filter/oval - UIHUT.svg`} height={"0"} width={"0"}
                    alt="max-circle" className="right-0  w-5 h-5 absolute top-0 -translate-y-[9px] hover:cursor-pointer hidden dark:block"
                />


                <Image id="min-price-light-mode" src={`/images/icons/filter/ligh-mode/oval - UIHUT.svg`} height={"0"} width={"0"}
                    alt="min-circle" className="w-5 h-5 absolute top-0 -translate-y-[9px] hover:cursor-pointer dark:hidden"
                />

                <Image id="max-price-light-mode" src={`/images/icons/filter/ligh-mode/oval - UIHUT.svg`} height={"0"} width={"0"}
                    alt="max-circle" className="right-0  w-5 h-5 absolute top-0 -translate-y-[9px] hover:cursor-pointer
                     dark:hidden
                    "
                />
            </div>
            <div className="flex justify-between">
                <div>
                    <div className=" dark:text-white text-[var(--bg-dark-mode-primary)] text-sm font-medium font-['Gordita'] leading-tight">Minimum</div>
                    <div className="mt-2.5 w-32 md:w-24 lg:w-32 xl:w-full px-3 py-2 rounded-md outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex items-center gap-2.5">
                        <div className="dark:text-white text-[var(--bg-dark-mode-primary)] text-sm font-medium font-['Gordita'] leading-tight w-fit outline-0">$</div>
                        <div className="dark:text-white text-[var(--bg-dark-mode-primary)] text-sm font-medium font-['Gordita'] leading-tight w-11/12 outline-0"
                        >{minCost}</div>
                    </div>
                </div>
                <div>
                    <div className=" dark:text-white text-[var(--bg-dark-mode-primary)] text-sm font-medium font-['Gordita'] leading-tight">Maximum</div>
                    <div className="mt-2.5 w-32 md:w-24 lg:w-32 xl:w-full px-3 py-2 rounded-md outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex items-center gap-2.5">
                        <div className="dark:text-white text-[var(--bg-dark-mode-primary)] text-sm font-medium font-['Gordita'] leading-tight w-fit outline-0">$</div>
                        <div className="dark:text-white text-[var(--bg-dark-mode-primary)] text-sm font-medium font-['Gordita'] leading-tight w-11/12 outline-0"
                        >
                            {maxCost}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PriceCrossBar;