import Image from "next/image";
function BeautyMenu() {
    return (<div className="absolute bottom-0 translate-y-[105%] left-1/2 -translate-x-[48%] 
        bg-white dark:bg-[var(--bg-dark-mode-secondary)] h-fit z-50 w-[90vw] p-5 rounded-[20px] 
            hidden group-hover:block shadow-[0px_40px_90px_20px_rgba(200,200,200,0.40)]">
        <div className="flex">
            <div className="w-[30%] border-r-2 border-r-zinc-300 ">
                <div className="flex items-center">
                    <div className="w-7 h-7 relative mr-8">
                        <div className="w-full h-full bg-[#7644E1] rounded-[5px]"></div>
                        <Image src={"/images/icons/header/dropDownMenu/beauty/cart-icon.svg"} height={"0"} width={"0"}
                            className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="cart-icon"
                        />
                        <Image src={"/images/icons/header/dropDownMenu/beauty/dark-mode/cart.svg"} height={"0"} width={"0"}
                            className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="cart-icon"
                        />
                    </div>
                    <h4 className=" text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Featured Shops</h4>
                </div>
                <ul className="mt-9">
                    <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Pickup Today in Beauty</li>
                    <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-medium font-['Gordita'] leading-tight hover:text-sky-600">BeautySpaceNK</li>
                    <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Equate Beauty</li>
                    <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600 my-4">Beauty Deals</li>
                    <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Walmart Exclusives</li>
                    <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600 my-4">Luxury Beauty Deals</li>
                    <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">New Arrivals</li>
                </ul>
                <div className="mt-10">
                    <div className="flex items-center">
                        <div className="w-7 h-7 relative mr-8">
                            <Image src={"/images/icons/header/dropDownMenu/beauty/pentagon-yellow-icon.svg"} height={"0"} width={"0"}
                                className="w-full h-full absolute right-[-15%] bottom-[-15%]" alt="pentagon-icon"
                            />
                            <Image src={"/images/icons/header/dropDownMenu/beauty/lip-stick-icon.svg"} height={"0"} width={"0"}
                                className="w-5 h-5 absolute right-[-30%] bottom-[-30%] dark:hidden" alt="lip-stick-icon"
                            />
                            <Image src={"/images/icons/header/dropDownMenu/beauty/dark-mode/lip-stick.svg"} height={"0"} width={"0"}
                                className="w-5 h-5 absolute right-[-30%] bottom-[-30%] hidden dark:block" alt="lip-stick-icon"
                            />
                        </div>
                        <h4 className=" text-gray-900 dark:text-[var(--text-color-icon-dark-mode)]  text-base font-semibold font-['Gordita'] leading-normal">Trending in Beauty</h4>
                    </div>
                    <ul className="mt-9">
                        <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Trending Beauty Products</li>
                        <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-medium font-['Gordita'] leading-tight hover:text-sky-600">Celebrate Earth Day</li>
                        <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Prom-ready Beauty</li>
                        <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600 my-4"> Summer Beauty</li>
                        <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Travel Size & Minis</li>
                    </ul>
                </div>
            </div>
            <div className="w-[70%] pl-12">
                <div className="grid grid-cols-3 gap-5">
                    <div>
                        <div className="flex items-center">
                            <div className="w-7 h-7 relative mr-8">
                                <Image src={"/images/icons/header/dropDownMenu/beauty/pentagon-pink-icon.svg"} height={"0"} width={"0"}
                                    className="w-full h-full absolute right-[-15%] bottom-[-15%]" alt="hexagon-icon"
                                />
                                <Image src={"/images/icons/header/dropDownMenu/beauty/star.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-25%] bottom-[-25%] dark:hidden" alt="star-icon"
                                />
                                <Image src={"/images/icons/header/dropDownMenu/beauty/dark-mode/star.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-25%] bottom-[-25%] hidden dark:block" alt="star-icon"
                                />
                            </div>
                            <h4 className=" text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Featured Brands</h4>
                        </div>
                        <ul className="mt-5">
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Shop All</li>
                            <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-medium font-['Gordita'] leading-tight hover:text-sky-600">New in Bakery</li>
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Sliced Bread</li>
                            <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Rolls & Buns</li>
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Tortillas</li>
                            <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Breakfast Breads</li>
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Pies</li>
                            <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Cookies & Brownies</li>

                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="w-7 h-7 relative mr-8">
                                <Image src={"/images/icons/header/dropDownMenu/beauty/hexagon-green-icon.svg"} height={"0"} width={"0"}
                                    className="w-full h-full" alt="hexagon-green-icon"
                                />
                                <Image src={"/images/icons/header/dropDownMenu/beauty/premium.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="premium-icon"
                                />
                                <Image src={"/images/icons/header/dropDownMenu/beauty/dark-mode/premium.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="premium-icon"
                                />
                            </div>
                            <h4 className=" text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Premium Beauty</h4>
                        </div>
                        <ul className="mt-5">
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Shop All</li>
                            <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Hair Color</li>
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Hair Care</li>
                            <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Skincare</li>
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Fragrance</li>
                            <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Makeup</li>
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Beauty Tech & Tools</li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="w-7 h-7 relative mr-8">
                                <Image src={"/images/icons/header/dropDownMenu/beauty/ellipse-yellow-icon.svg"} height={"0"} width={"0"}
                                    className="w-full h-full" alt="ellipse-yellow-icon"
                                />
                                <Image src={"/images/icons/header/dropDownMenu/beauty/face-women-icon.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="face-women-icon"
                                />
                                <Image src={"/images/icons/header/dropDownMenu/beauty/dark-mode/women-face.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="face-women-icon"
                                />
                            </div>
                            <h4 className=" text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Beauty</h4>
                        </div>
                        <ul className="mt-5">
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Shop All</li>
                            <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Men's Grooming</li>
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Bath & Body</li>
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight my-4">Beauty Tech & Tools</li>
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Makeup</li>
                            <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Fragrance</li>
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Nail Care</li>
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight my-4">Hair Care</li>
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Nail Color</li>
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight mt-4">Skincare</li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="w-7 h-7 relative mr-8">
                                <Image src={"/images/icons/header/dropDownMenu/beauty/rhombus-blue-icon.svg"} height={"0"} width={"0"}
                                    className="w-full h-full" alt="rhombus-icon"
                                />
                                <Image src={"/images/icons/header/dropDownMenu/beauty/dish-icon.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="dish-icon"
                                />
                                <Image src={"/images/icons/header/dropDownMenu/beauty/dark-mode/dish.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="dish-icon"
                                />
                            </div>
                            <h4 className=" text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Communities to Support</h4>
                        </div>
                        <ul className="mt-5">
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Black Owned Beauty</li>
                            <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">LatinX Owned Beauty</li>
                            <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">AAPI Owned Beauty</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default BeautyMenu;