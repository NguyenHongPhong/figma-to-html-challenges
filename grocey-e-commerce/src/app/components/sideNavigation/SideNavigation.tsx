import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ROUTES } from "../../config/routes";
function SideNavigation() {
    const router = useRouter();
    const handleLinkToLogin = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const inputStatus = document.getElementById("status-checkbox") as HTMLInputElement;
        if (inputStatus) {
            inputStatus.checked = !inputStatus.checked;
        };
        router.push(ROUTES.login);
    }
    return (
        <div className="fixed top-0 left-0 w-full md:w-1/2 h-full bg-white dark:bg-[var(--bg-dark-mode-secondary)]
                        opacity-0 pointer-events-none -translate-x-full peer-has-checked:opacity-100 peer-has-checked:-translate-x-0
                        transition-all duration-500 ease-in-out peer-has-checked:pointer-events-auto z-20 @container overflow-y-auto
                        ">
            <label htmlFor="status-checkbox" >
                <Image src={'/images/icons/header/arrow-left-dark-mode.svg'} height={"0"} width={"0"}
                    className="w-4 h-4 hidden dark:block" alt="arrow-left"
                />
                <Image src={'/images/icons/header/arrow-left.svg'} height={"0"} width={"0"}
                    className="w-4 h-4 dark:hidden" alt="arrow-left"
                />
            </label>
            <div className="flex justify-between mt-5">
                <div className="flex">
                    <Image src={"/images/icons/header/cart-dark-mode.svg"} height={"0"} width={"0"}
                        className="w-6 h-6 hidden dark:block" alt=""
                    />
                    <Image src={"/images/icons/header/cart.svg"} height={"0"} width={"0"}
                        className="w-6 h-6 dark:hidden" alt=""
                    />
                    <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-base font-medium font-['Gordita'] leading-snug ml-3">Card</div>
                </div>

                <div className="text-right justify-start dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-base font-medium font-['Gordita'] leading-snug">3</div>
            </div>
            <div className="flex justify-between mt-5">
                <div className="flex">
                    <Image src={"/images/icons/header/heart-dark-mode.svg"} height={"0"} width={"0"}
                        className="w-6 h-6 hidden dark:block" alt=""
                    />
                    <Image src={"/images/icons/header/Heart.svg"} height={"0"} width={"0"}
                        className="w-6 h-6 dark:hidden" alt=""
                    />
                    <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-base font-medium font-['Gordita'] leading-snug ml-3">Favorite</div>
                </div>

                <div className="text-right justify-start dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-base font-medium font-['Gordita'] leading-snug">3</div>
            </div>
            <div>
                <label htmlFor="status-department" className="flex mt-5 justify-between items-center peer">
                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-lg font-medium font-['Gordita'] leading-normal">Departments</div>
                    <label htmlFor="status-department" className="peer">
                        <input id="status-department" type="checkbox" className="hidden" />
                    </label>
                    <FontAwesomeIcon icon={faChevronUp} className="w-4 h-4 dark:text-[var(--text-color-icon-dark-mode)] text-[var(--bg-dark-mode-primary)] !hidden peer-has-checked:!block" />
                    <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 dark:text-[var(--text-color-icon-dark-mode)] text-[var(--bg-dark-mode-primary)] !block peer-has-checked:!hidden" />
                </label>
                <div className="h-0 w-full opacity-0 pointer-events-none transition-opacity duration-200 ease-in-out
                                peer-has-checked:opacity-100 peer-has-checked:h-fit peer-has-checked:pointer-events-auto
                                ">
                    <div className="mt-5">
                        <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">Savings & Featured Shops</div>
                    </div>
                    <label htmlFor="status-input-navigation" className="flex mt-5 justify-between items-center peer mb-6">
                        <div className="justify-start dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-medium font-['Gordita'] leading-tight">Electronics</div>
                        <label htmlFor="status-input-navigation" className="peer">
                            <input id="status-input-navigation" type="checkbox" className="hidden" />
                        </label>
                        <FontAwesomeIcon icon={faChevronUp} className="w-4 h-4 dark:text-[var(--text-color-icon-dark-mode)] text-[var(--bg-dark-mode-primary)] !hidden peer-has-checked:!block" />
                        <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 dark:text-[var(--text-color-icon-dark-mode)] text-[var(--bg-dark-mode-primary)] !block peer-has-checked:!hidden" />
                    </label>
                    <div className="h-0 w-11/12 dark:bg-[var(--bg-dark-mode-secondary)] bg-white opacity-0 pointer-events-none
                            peer-has-checked:opacity-100 peer-has-checked:pointer-events-auto transition-all duration-300 ease-initial
                            peer-has-checked:h-fit">
                        <ul className="flex flex-col justify-between">
                            <li className="flex items-center mb-6">
                                <div className="w-7 h-7 bg-purple-500 rounded-[5px] relative mr-8"
                                >
                                    <Image src={"/images/icons/header/sideNavigation/TV-icon-dark-mode.svg"} height={"0"} width={"0"}
                                        className="w-6 h-6 right-[-8px] bottom-[-8px] absolute hidden dark:block"
                                        alt="TV-show"
                                    />
                                    <Image src={"/images/icons/header/sideNavigation/TV-icon.svg"} height={"0"} width={"0"}
                                        className="w-6 h-6 right-[-8px] bottom-[-8px] absolute dark:hidden"
                                        alt="TV-show"
                                    />
                                </div>
                                <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">TV & Video</div>
                            </li>
                            <li className="ml-[4rem]">
                                <Link href={"/#shop-all-tv"}>
                                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">Shop all TVs</div>
                                </Link>
                            </li>
                            <li className="ml-[4rem] my-3">
                                <Link href={"/#tv-by-size"}>
                                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">TVs by Size</div>
                                </Link>
                            </li>
                            <li className="ml-[4rem] ">
                                <Link href={"/#smart-tv"}>
                                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">Smart TVs</div>
                                </Link>
                            </li>
                            <li className="ml-[4rem] my-3">
                                <Link href={"/#roku-tv"}>
                                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">Roku TVs</div>
                                </Link>
                            </li>
                            <li className="ml-[4rem]">
                                <Link href={"/#streaming"}>
                                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">Streaming</div>
                                </Link>
                            </li>
                            <li className="ml-[4rem] my-3">
                                <Link href={"/#tv-mount-and-accessories"}>
                                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">TV Mounts & Accessories</div>
                                </Link>
                            </li>
                            <li className="ml-[4rem]">
                                <Link href={"/#dvd-and-blu-ray-players"}>
                                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">DVD & Blu-Ray Players</div>
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col justify-between mt-10">
                            <li className="flex items-center mb-6">
                                <div className="w-7 h-7 relative mr-8"
                                >
                                    <Image src={"/images/icons/header/sideNavigation/star-dark-mode.svg"} height={"0"} width={"0"}
                                        className="w-full h-full right-[-8px]"
                                        alt="TV-show"
                                    />
                                    <Image src={"/images/icons/header/sideNavigation/TV-icon-dark-mode.svg"} height={"0"} width={"0"}
                                        className="w-6 h-6 right-[-8px] bottom-[-8px] absolute hidden dark:block"
                                        alt="TV-show"
                                    />
                                    <Image src={"/images/icons/header/sideNavigation/TV-icon.svg"} height={"0"} width={"0"}
                                        className="w-6 h-6 right-[-8px] bottom-[-8px] absolute dark:hidden"
                                        alt="TV-show"
                                    />
                                </div>
                                <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">Wearable Technology</div>
                            </li>
                            <li className="ml-[4rem]">
                                <Link href={"/#galaxy-watch"}>
                                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">Galaxy Watch</div>
                                </Link>
                            </li>
                            <li className="ml-[4rem] my-3">
                                <Link href={"/#apple-watch"}>
                                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">Apple Watch</div>
                                </Link>
                            </li>
                            <li className="ml-[4rem] ">
                                <Link href={"/#fitness-trackers"}>
                                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">Fitness Trackers</div>
                                </Link>
                            </li>
                            <li className="ml-[4rem] my-3">
                                <Link href={"/#virtual-reality"}>
                                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">Virtual Reality</div>
                                </Link>
                            </li>
                            <li className="ml-[4rem]">
                                <Link href={"/#head-phones"}>
                                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">Headphones</div>
                                </Link>
                            </li>
                            <li className="ml-[4rem] my-3">
                                <Link href={"/#tv-mount-and-accessories"}>
                                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">TV Mounts & Accessories</div>
                                </Link>
                            </li>
                            <li className="ml-[4rem]">
                                <Link href={"/#dvd-and-blu-ray-players"}>
                                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight">DVD & Blu-Ray Players</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight mt-0 peer-has-checked:mt-5"><Link href={"/#"}>
                        Clothing, Shoes & Accessories</Link></div>
                    <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight mt-5"><Link href={"/#"}>
                        Home, Furniture & Appliances</Link></div>
                    <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight mt-5"><Link href={"/#"}>
                        Toys & Video Games</Link></div>
                    <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight mt-5"><Link href={"/#"}>
                        Home Improvement</Link></div>
                    <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight mt-5"><Link href={"/#"}>
                        Baby</Link></div>
                    <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight mt-5"><Link href={"/#"}>
                        Household Essentials</Link></div>
                    <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight mt-5"><Link href={"/#"}>
                        Personal Care</Link></div>
                    <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight mt-5"><Link href={"/#"}>
                        Patio & Garden</Link></div>
                    <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight mt-5"><Link href={"/#"}>
                        Sports & Outdoors</Link></div>
                    <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight mt-5"><Link href={"/#"}>
                        Gift Cards</Link></div>
                    <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight mt-5"><Link href={"/#"}>
                        Auto, Tires and Industrial</Link></div>
                    <div className="dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight mt-5"><Link href={"/#"}>
                        Movies, Music & Books</Link></div>
                </div>
            </div>
            <div className="my-2">
                <label htmlFor="status-grocery" className="flex justify-between items-center peer">
                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-lg font-medium font-['Gordita'] leading-normal">Grocery</div>
                    <label htmlFor="status-grocery" className="peer">
                        <input id="status-grocery" type="checkbox" className="hidden" />
                    </label>
                    <FontAwesomeIcon icon={faChevronUp} className="w-4 h-4 dark:text-[var(--text-color-icon-dark-mode)] text-[var(--bg-dark-mode-primary)] !hidden peer-has-checked:!block" />
                    <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 dark:text-[var(--text-color-icon-dark-mode)] text-[var(--bg-dark-mode-primary)] !block peer-has-checked:!hidden" />
                </label>
                <div className="h-0 w-full opacity-0 pointer-events-none transition-opacity duration-200 ease-in-out
                                peer-has-checked:opacity-100 peer-has-checked:h-fit peer-has-checked:pointer-events-auto 
                                mt-5">
                    <div className="grid grid-cols-1 gap-5">
                        <div>
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <div className="w-full h-full bg-[#7644E1] rounded-[5px]"></div>
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/cart-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="cart-icon"
                                    />
                                    <Image src={"/images/icons/header/sideNavigation/grocery/dark-mode/cart-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="cart-icon"
                                    />

                                </div>
                                <h4 className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">Grocery</h4>
                            </div>
                            <ul className="mt-2">
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Shop All</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-medium font-['Gordita'] leading-tight hover:text-sky-600">Grilling Foods</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Spring Flavors</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/star.svg"} height={"0"} width={"0"}
                                        className="w-full h-full absolute right-[-15%] bottom-[-15%]" alt="star-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/tomato-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-30%] bottom-[-30%] dark:hidden" alt="tomato-icon"
                                    />
                                    <Image src={"/images/icons/header/sideNavigation/grocery/light-mode/tomato-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-30%] bottom-[-30%] hidden dark:block" alt="tomato-icon"
                                    />
                                </div>
                                <h4 className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">Fresh Produce</h4>
                            </div>
                            <ul className="mt-4">
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Shop All</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-medium font-['Gordita'] leading-tight hover:text-sky-600">Celebrate Salad Month</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Healthy Living</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600 my-4">Fresh Flowers</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Chilled Dressing</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600 my-4">Fresh Fruit</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Salad Kits & Bowls</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600 my-4">Organic Produce</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Fresh Vegetables</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/triangle.svg"} height={"0"} width={"0"}
                                        className="w-full h-full absolute right-[-15%] bottom-[-15%]" alt="triangle-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/bread.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="bread-icon"
                                    />
                                    <Image src={"/images/icons/header/sideNavigation/grocery/light-mode/bread-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="bread-icon"
                                    />
                                </div>
                                <h4 className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">Bakery & Bread</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Shop All</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-medium font-['Gordita'] leading-tight hover:text-sky-600">New in Bakery</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Sliced Bread</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Rolls & Buns</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Tortillas</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Breakfast Breads</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Pies</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Cookies & Brownies</li>

                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/ellipse-violet.svg"} height={"0"} width={"0"}
                                        className="w-full h-full" alt="ellipse-violet-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/fast-food-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="fast-food-icon"
                                    />
                                    <Image src={"/images/icons/header/sideNavigation/grocery/light-mode/fast-food-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="fast-food-icon"
                                    />
                                </div>
                                <h4 className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">Snacks</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Shop All</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Chips</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Popcorn & Pretzels</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Crackers</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Salsa & Dips</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/ellipse-pink.svg"} height={"0"} width={"0"}
                                        className="w-full h-full" alt="ellipse-pink-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/coffee.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="coffee-icon"
                                    />
                                    <Image src={"/images/icons/header/sideNavigation/grocery/light-mode/coffee.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="coffee-icon"
                                    />
                                </div>
                                <h4 className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">Cocktails & Mixes Coffee</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Ground Coffee</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Whole Bean Coffee</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Coffee Pods</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight mt-4">Instant Coffee</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/rhombus-yellow-icon.svg"} height={"0"} width={"0"}
                                        className="w-full h-full" alt="rhombus-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/dish-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="dish-icon"
                                    />
                                    <Image src={"/images/icons/header/sideNavigation/grocery/light-mode/dish-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="dish-icon"
                                    />
                                </div>
                                <h4 className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">Frozen</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Frozen Breakfast</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Frozen Potatoes</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Frozen Meals & Snacks</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/hexagon-pink-icon.svg"} height={"0"} width={"0"}
                                        className="w-full h-full" alt="hexagon-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/candy-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%]" alt="candy-icon"
                                    />
                                    <Image src={"/images/icons/header/sideNavigation/grocery/light-mode/candy-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%]" alt="candy-icon"
                                    />
                                </div>
                                <h4 className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">Candy</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Shop All</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Better for You</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Chocolate</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Sugar Free Candy</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Gum</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Mints</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">On-the-Go</li>

                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/hexagon-green-icon.svg"} height={"0"} width={"0"}
                                        className="w-full h-full" alt="hexagon-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/grocery/drink-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="drink-icon"
                                    />
                                    <Image src={"/images/icons/header/sideNavigation/grocery/light-mode/drink-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="drink-icon"
                                    />
                                </div>
                                <h4 className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">Beverages</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Shop All</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Water</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Soft Drinks</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Fruit Juice</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Sport Drinks</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Energy Drinks</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Tea</li>
                                <li className="ml-[4rem] dark:text-gray-400 text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight mt-4">Hot Chocolate & Coca</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="status-beauty" className="flex justify-between items-center peer">
                    <div className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-lg font-medium font-['Gordita'] leading-normal">Beauty</div>
                    <label htmlFor="status-beauty" className="peer">
                        <input id="status-beauty" type="checkbox" className="hidden" />
                    </label>
                    <FontAwesomeIcon icon={faChevronUp} className="w-4 h-4 dark:text-[var(--text-color-icon-dark-mode)] text-[var(--bg-dark-mode-primary)] !hidden peer-has-checked:!block" />
                    <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 dark:text-[var(--text-color-icon-dark-mode)] text-[var(--bg-dark-mode-primary)] !block peer-has-checked:!hidden" />
                </label>
                <div className="h-0 w-full opacity-0 pointer-events-none peer-has-checked:opacity-100 peer-has-checked:pointer-events-auto
                peer-has-checked:h-fit peer-has-checked:mt-5
                ">
                    <div className="grid grid-cols-1 gap-5">
                        <div className="flex items-center">
                            <div className="w-7 h-7 relative mr-8">
                                <div className="w-full h-full bg-[#7644E1] rounded-[5px]"></div>
                                <Image src={"/images/icons/header/dropDownMenu/beauty/cart-icon.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%]" alt="cart-icon"
                                />
                            </div>
                            <h4 className=" dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">Featured Shops</h4>
                        </div>
                        <ul>
                            <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Pickup Today in Beauty</li>
                            <li className="ml-[4rem] my-4 dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-medium font-['Gordita'] leading-tight hover:text-sky-600">BeautySpaceNK</li>
                            <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Equate Beauty</li>
                            <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600 my-4">Beauty Deals</li>
                            <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Walmart Exclusives</li>
                            <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600 my-4">Luxury Beauty Deals</li>
                            <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">New Arrivals</li>
                        </ul>
                        <div>
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/beauty/pentagon-pink-icon.svg"} height={"0"} width={"0"}
                                        className="w-full h-full absolute right-[-15%] bottom-[-15%]" alt="hexagon-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/beauty/star.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-25%] bottom-[-25%]" alt="star-icon"
                                    />
                                </div>
                                <h4 className=" dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">Featured Brands</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Shop All</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-medium font-['Gordita'] leading-tight hover:text-sky-600">New in Bakery</li>
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Sliced Bread</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Rolls & Buns</li>
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Tortillas</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Breakfast Breads</li>
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Pies</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Cookies & Brownies</li>

                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/beauty/hexagon-green-icon.svg"} height={"0"} width={"0"}
                                        className="w-full h-full" alt="hexagon-green-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/beauty/premium.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%]" alt="premium-icon"
                                    />
                                </div>
                                <h4 className=" dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">Premium Beauty</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Shop All</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Hair Color</li>
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Hair Care</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Skincare</li>
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Fragrance</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Makeup</li>
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Beauty Tech & Tools</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/beauty/ellipse-yellow-icon.svg"} height={"0"} width={"0"}
                                        className="w-full h-full" alt="ellipse-yellow-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/beauty/face-women-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%]" alt="face-women-icon"
                                    />
                                </div>
                                <h4 className=" dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">Beauty</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Shop All</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Men's Grooming</li>
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Bath & Body</li>
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight my-4">Beauty Tech & Tools</li>
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Makeup</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Fragrance</li>
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Nail Care</li>
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight my-4">Hair Care</li>
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Nail Color</li>
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight mt-4">Skincare</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="w-7 h-7 relative mr-8">
                                    <Image src={"/images/icons/header/dropDownMenu/beauty/rhombus-blue-icon.svg"} height={"0"} width={"0"}
                                        className="w-full h-full" alt="rhombus-icon"
                                    />
                                    <Image src={"/images/icons/header/dropDownMenu/beauty/dish-icon.svg"} height={"0"} width={"0"}
                                        className="w-5 h-5 absolute right-[-15%] bottom-[-15%]" alt="dish-icon"
                                    />
                                </div>
                                <h4 className=" dark:text-gray-400  text-[var(--bg-dark-mode-primary)] text-base font-semibold font-['Gordita'] leading-normal">Communities to Support</h4>
                            </div>
                            <ul className="mt-5">
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Black Owned Beauty</li>
                                <li className="ml-[4rem] my-4 dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">LatinX Owned Beauty</li>
                                <li className="ml-[4rem] dark:text-gray-400  text-[var(--bg-dark-mode-primary)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">AAPI Owned Beauty</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-3">
                <Link href={"/auth/register"} className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-lg font-medium font-['Gordita'] leading-normal my-8"

                >Sign Up</Link>
                <Link href={ROUTES.login} className=" dark:text-gray-400 text-[var(--bg-dark-mode-primary)] text-lg font-medium font-['Gordita'] leading-normal"
                    onClick={handleLinkToLogin}
                >Sign In</Link>
            </div>

        </div>
    )
}

export default SideNavigation;