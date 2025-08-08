"use client"
import Image from "next/image";
import SideNavigation from "./sideNavigation/SideNavigation";
import { useEffect, useState } from "react";
import Modal from "./modal/Modal";
import ArrowUp from "./arrowUp/ArrowUp";
import DepartmentMenu from "./dropDownMenu/Department";
import GroceryMenu from "./dropDownMenu/Grocery";
import BeautyMenu from "./dropDownMenu/Beauty";

function Header() {
    const [toggleScrollY, setToggleScrollY] = useState(false);
    useEffect(() => {
        if (toggleScrollY) {
            document.body.classList.add('overflow-hidden');
            return () => {
                document.body.classList.remove('overflow-hidden');
            };
        }
    }, [toggleScrollY])

    return (<header className=" dark:bg-[rgba(23,28,40)] bg-[var(--bg-light-mode-primary)]">
        <div className="flex justify-between items-center @container">
            <div className="lg:hidden">
                <label htmlFor="status-checkbox" className="peer">
                    <input id="status-checkbox" className="hidden" type="checkbox" onChange={() => {
                        setToggleScrollY(!toggleScrollY)
                    }} />
                    <Image src={`/images/icons/header/Document.svg`} className="w-6 h-6 dark:hidden"
                        width="0" height="0" alt="icon-header"
                    />
                    <Image src={`/images/icons/header/Document-dark-mode.svg`} className="w-6 h-6 dark:block hidden"
                        width="0" height="0" alt="icon-header"
                    />
                </label>

                <SideNavigation />
                <Modal />

            </div>
            <div className="flex lg:grow-2">
                <Image src={`/images/logo/Icon.svg`} className="w-6 h-6 mr-3"
                    width="0" height="0" alt="logo"
                />
                <div className="justify-start text-black text-lg font-bold 
                font-['Gordita'] leading-relaxed dark:text-white">grocerymart</div>
            </div>
            <nav className="hidden lg:block lg:grow-2">
                <ul className="flex w-11/12 justify-start">
                    <li className="flex items-center text-gray-900 dark:text-white text-lg font-medium font-['Gordita'] 
                    leading-snug relative hover:cursor-pointer group before:w-full before:h-12 before:content-[''] before:bottom-[-193%] before:absolute">
                        Departments
                        <Image src={'/images/icons/header/Arrow-down.svg'} height={"0"} width={"0"}
                            className="w-3 h-3 ml-2.5 dark:hidden"
                            alt=""
                        />
                        <Image src={'/images/icons/header/arrow-down-dark-mode.svg'} height={"0"} width={"0"}
                            className="w-3 h-3 ml-2.5 hidden dark:block"
                            alt=""
                        />
                        <ArrowUp />
                        <DepartmentMenu />
                    </li>
                    <li className="flex items-center text-gray-900 dark:text-white text-lg font-medium font-['Gordita'] leading-snug mx-10
                                    relative hover:cursor-pointer group before:w-full before:h-12 before:content-[''] before:bottom-[-193%] before:absolute
                                    ">
                        Grocery
                        <Image src={'/images/icons/header/Arrow-down.svg'} height={"0"} width={"0"}
                            className="w-3 h-3 ml-2.5 dark:hidden"
                            alt=""
                        />
                        <Image src={'/images/icons/header/arrow-down-dark-mode.svg'} height={"0"} width={"0"}
                            className="w-3 h-3 ml-2.5 hidden dark:block"
                            alt=""
                        />
                        <ArrowUp />
                        <GroceryMenu />

                    </li>
                    <li className="flex items-center text-gray-900 dark:text-white text-lg font-medium font-['Gordita'] leading-snug
                                    relative hover:cursor-pointer group before:w-full before:h-12 before:content-[''] before:bottom-[-193%] before:absolute group">
                        Beauty
                        <Image src={'/images/icons/header/Arrow-down.svg'} height={"0"} width={"0"}
                            className="w-3 h-3 ml-2.5 dark:hidden"
                            alt=""
                        />
                        <Image src={'/images/icons/header/arrow-down-dark-mode.svg'} height={"0"} width={"0"}
                            className="w-3 h-3 ml-2.5 hidden dark:block"
                            alt=""
                        />
                        <ArrowUp />
                        <BeautyMenu />
                    </li>
                </ul>
            </nav>
            <div className="hidden lg:block lg:grow-2">
                <div className="flex justify-between">
                    <div className="p-3 bg-white rounded-lg shadow-[0px_20px_60px_10px_rgba(237,237,246,0.20)]">
                        <Image src={`/images/icons/header/Search.svg`} height={"0"} width={"0"}
                            className="w-6 h-6"
                            alt="search-icon" />
                    </div>
                    <div className="px-5 py-2.5 bg-white rounded-lg shadow-[0px_20px_60px_10px_rgba(237,237,246,0.20)] inline-flex 
                                    justify-between w-3/5">
                        <div className="flex items-center">
                            <Image src={'/images/icons/header/Heart.svg'} height={"0"} width={"0"}
                                className="w-6 h-6 mr-4"
                                alt="heart-icon" />
                            <div className=" text-gray-900 text-base font-medium font-['Gordita'] leading-snug">03</div>
                        </div>
                        <div className="w-px h-7 bg-violet-100"></div>
                        <div className="flex items-center">
                            <Image src={'/images/icons/header/Buy.svg'} height={"0"} width={"0"}
                                className="w-6 h-6 mr-4"
                                alt="cart-icon" />
                            <div className=" text-gray-900 text-base font-medium font-['Gordita'] leading-snug">$65.42</div>
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-lg shadow-[0px_4px_14px_2px_rgba(0,0,0,0.08)]
                                bg-[rgba(223,210,250)] ">
                        <div className="bg-[url(/images/header/portrait-user.png)] w-full h-full bg-[length:800%] bg-[position:54%_12%] bg-no-repeat"></div>
                    </div>
                </div>
            </div>
            <div className="w-12 h-12 rounded-lg shadow-[0px_4px_14px_2px_rgba(0,0,0,0.08)]
            bg-[rgba(223,210,250)] lg:hidden
            ">
                <div className="bg-[url(/images/header/portrait-user.png)] w-full h-full bg-[length:800%] bg-[position:54%_12%] bg-no-repeat"></div>
            </div>
        </div>
    </header>)
}

export default Header;