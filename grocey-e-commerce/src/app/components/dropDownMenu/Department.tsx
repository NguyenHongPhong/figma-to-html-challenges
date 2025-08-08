import Image from "next/image";
function DepartmentMenu() {
    return (
        <div className="absolute bottom-0 translate-y-[105%] left-1/2 -translate-x-[30%] bg-white dark:bg-[var(--bg-dark-mode-secondary)]
                         h-fit z-50 w-[90vw] p-5 rounded-[20px] hidden group-hover:block
                         shadow-[0px_40px_90px_20px_rgba(200,200,200,0.40)]">
            <div className="flex">
                <div className="w-[30%] border-r-2 border-r-zinc-300 ">
                    <div className="flex items-center">
                        <div className="w-7 h-7 relative mr-8">
                            <Image src={"/images/icons/header/dropDownMenu/department/Ellipse 2.svg"} height={"0"} width={"0"}
                                className="w-full h-full" alt="ellipse-icon"
                            />
                            <Image src={"/images/icons/header/dropDownMenu/department/Category.svg"} height={"0"} width={"0"}
                                className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="category-icon"
                            />
                            <Image src={"/images/icons/header/dropDownMenu/department/dark-mode/category-icon.svg"} height={"0"} width={"0"}
                                className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="category-icon"
                            />
                        </div>
                        <h4 className=" text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">All Departments</h4>
                    </div>
                    <ul className="mt-9">
                        <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Savings & Featured Shops</li>
                        <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-medium font-['Gordita'] leading-tight hover:text-sky-600">Electronics</li>
                        <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Clothing, Shoes & Accessories</li>
                        <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Home, Furniture & Appliances</li>
                        <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Toys & Video Games</li>
                        <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Home Improvement</li>
                        <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Baby</li>
                        <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Household Essentials</li>
                        <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Personal Care</li>
                        <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Patio & Garden</li>
                        <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Sports & Outdoors</li>
                        <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Gift Cards</li>
                        <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Auto, Tires and Industrial</li>
                        <li className="ml-[4rem] mt-5 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Movies, Music & Books</li>
                    </ul>
                </div>
                <div className="w-[70%] pl-12">
                    <div className="grid grid-cols-3 gap-5">
                        <div>
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <div className="w-7 h-7 bg-[rgba(159,124,234)] rounded-[5px]"></div>
                                    <Image src={"/images/icons/header/dropDownMenu/department/Game.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="game-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/department/dark-mode/TV-playing-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="tv-icon"
                                    />
                                </div>
                                <h4 className=" text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">TV & Video</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Shop all TVs</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-medium font-['Gordita'] leading-tight hover:text-sky-600">TVs by Size</li>
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Smart TVs</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Roku TVs</li>
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Streaming</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">TV Mounts & Accessories</li>
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Baby</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">DVD & Blu-Ray Players</li>

                            </ul>
                        </div>
                        <div className="row-span-3">
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/department/polygon.svg"} height={"0"} width={"0"}
                                        className="w-full h-full" alt="polygon-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/department/monitor.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="monitor-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/department/dark-mode/devices-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="monitor-icon"
                                    />
                                </div>
                                <h4 className=" text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Computers</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Shop All Computers</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Laptops</li>
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">PC Gaming</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Monitors</li>
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Chromebook</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Printers & Ink</li>
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Shop all TVs</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Computer Accessories</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Desktops</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Tax Software</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Computer Software</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">PC Finder</li>
                            </ul>
                        </div>
                        <div className=" row-start-2 col-start-3">
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/department/saving.svg"} height={"0"} width={"0"}
                                        className="w-full h-full" alt="saving-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/department/pocket.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="category-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/department/dark-mode/pocket-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:block hidden" alt="pocket-icon"
                                    />
                                </div>
                                <h4 className=" text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Savings</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Tech Savings</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Overstock Savings</li>
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Tech Rollbacks</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/department/star.svg"} height={"0"} width={"0"}
                                        className="w-full h-full" alt="star-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/department/Game.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="tv-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/department/dark-mode/TV-playing-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="tv-icon"
                                    />
                                </div>
                                <h4 className=" text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Wearable Technology</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Galaxy Watch</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Apple Watch</li>
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Fitness Trackers</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Virtual Reality</li>
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Headphones</li>
                            </ul>
                        </div>
                        <div className="row-start-1 col-start-3" >
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/department/polygon-cell-phone.svg"} height={"0"} width={"0"}
                                        className="w-full h-full" alt="polygon-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/department/smartphone 1.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="smartphone-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/department/dark-mode/smartphone-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:block hidden" alt="smartphone-icon"
                                    />
                                </div>
                                <h4 className=" text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Cell Phones</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Wireless Deals</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">5G Phones</li>
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Prepaid Phones & Plans</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Refurbished Phones</li>
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">iPhone Accessories</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Cases & Screen Protectors</li>
                                <li className="ml-[4rem] text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Walmart Protection Plan</li>
                                <li className="ml-[4rem] my-4 text-gray-900 dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Unlocked Phones</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DepartmentMenu;