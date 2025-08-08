import Image from "next/image";

function GroceryMenu() {
    return (<div className="absolute bottom-0 translate-y-[104%] left-1/2 -translate-x-[40%] bg-white dark:bg-[var(--bg-dark-mode-secondary)]
                             h-fit z-50 w-[90vw] p-5 rounded-[20px] hidden group-hover:block
                             shadow-[0px_40px_90px_20px_rgba(200,200,200,0.40)]">
        <div className="flex">
            <div className="w-[30%] border-r-2 border-r-zinc-300 ">
                <div className="flex items-center">
                    <div className="w-7 h-7 relative mr-8">
                        <div className="w-full h-full bg-[#7644E1] rounded-[5px]"></div>
                        <Image src={"/images/icons/header/dropDownMenu/grocery/cart-icon.svg"} height={"0"} width={"0"}
                            className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="cart-icon"
                        />
                        <Image src={"/images/icons/header/dropDownMenu/grocery/dark-mode/cart.svg"} height={"0"} width={"0"}
                            className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="cart-icon"
                        />

                    </div>
                    <h4 className=" text-gray-900 text-base font-semibold font-['Gordita'] leading-normal dark:text-[var(--text-color-icon-dark-mode)]">Grocery</h4>
                </div>
                <ul className="mt-9">
                    <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Shop All</li>
                    <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-medium font-['Gordita'] leading-tight hover:text-sky-600">Grilling Foods</li>
                    <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Spring Flavors</li>
                </ul>
                <div className="mt-10">
                    <div className="flex items-center">
                        <div className="w-7 h-7 relative mr-8">
                            <Image src={"/images/icons/header/dropDownMenu/grocery/star.svg"} height={"0"} width={"0"}
                                className="w-full h-full absolute right-[-15%] bottom-[-15%]" alt="star-icon"
                            />
                            <Image src={"/images/icons/header/dropDownMenu/grocery/tomato-icon.svg"} height={"0"} width={"0"}
                                className="w-5 h-5 absolute right-[-30%] bottom-[-30%] dark:hidden" alt="tomato-icon"
                            />
                            <Image src={"/images/icons/header/dropDownMenu/grocery/dark-mode/fruit.svg"} height={"0"} width={"0"}
                                className="w-5 h-5 absolute right-[-30%] bottom-[-30%] hidden dark:block" alt="fruit-icon"
                            />
                        </div>
                        <h4 className=" text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Fresh Produce</h4>
                    </div>
                    <ul className="mt-9">
                        <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Shop All</li>
                        <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-medium font-['Gordita'] leading-tight hover:text-sky-600">Celebrate Salad Month</li>
                        <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Healthy Living</li>
                        <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600 my-4">Fresh Flowers</li>
                        <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Chilled Dressing</li>
                        <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600 my-4">Fresh Fruit</li>
                        <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Salad Kits & Bowls</li>
                        <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600 my-4">Organic Produce</li>
                        <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Fresh Vegetables</li>
                    </ul>
                </div>
            </div>
            <div className="w-[70%] pl-12">
                <div className="grid grid-cols-3 gap-5">
                    <div>
                        <div className="flex items-center">
                            <div className="w-7 h-7 relative mr-8">
                                <Image src={"/images/icons/header/dropDownMenu/grocery/triangle.svg"} height={"0"} width={"0"}
                                    className="w-full h-full absolute right-[-15%] bottom-[-15%]" alt="triangle-icon"
                                />
                                <Image src={"/images/icons/header/dropDownMenu/grocery/bread.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="bread-icon"
                                />
                                <Image src={"/images/icons/header/dropDownMenu/grocery/dark-mode/bread.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="bread-icon"
                                />
                            </div>
                            <h4 className=" text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Bakery & Bread</h4>
                        </div>
                        <ul className="mt-5">
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Shop All</li>
                            <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-medium font-['Gordita'] leading-tight hover:text-sky-600">New in Bakery</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Sliced Bread</li>
                            <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Rolls & Buns</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Tortillas</li>
                            <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Breakfast Breads</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Pies</li>
                            <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-sm font-normal font-['Gordita'] leading-tight hover:text-sky-600">Cookies & Brownies</li>

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
                                <Image src={"/images/icons/header/dropDownMenu/grocery/dark-mode/fast-food.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="fast-food-icon"
                                />
                            </div>
                            <h4 className=" text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Snacks</h4>
                        </div>
                        <ul className="mt-5">
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Shop All</li>
                            <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Chips</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Popcorn & Pretzels</li>
                            <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Crackers</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Salsa & Dips</li>
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
                                <Image src={"/images/icons/header/dropDownMenu/grocery/dark-mode/coffee.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="coffee-icon"
                                />
                            </div>
                            <h4 className=" text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Cocktails & Mixes Coffee</h4>
                        </div>
                        <ul className="mt-5">
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Ground Coffee</li>
                            <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Whole Bean Coffee</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Coffee Pods</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight mt-4">Instant Coffee</li>
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
                                <Image src={"/images/icons/header/dropDownMenu/grocery/dark-mode/dish.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="dish-icon"
                                />
                            </div>
                            <h4 className=" text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Frozen</h4>
                        </div>
                        <ul className="mt-5">
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Frozen Breakfast</li>
                            <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Frozen Potatoes</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Frozen Meals & Snacks</li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="w-7 h-7 relative mr-8">
                                <Image src={"/images/icons/header/dropDownMenu/grocery/hexagon-pink-icon.svg"} height={"0"} width={"0"}
                                    className="w-full h-full" alt="hexagon-icon"
                                />
                                <Image src={"/images/icons/header/dropDownMenu/grocery/candy-icon.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%] dark:hidden" alt="candy-icon"
                                />
                                <Image src={"/images/icons/header/dropDownMenu/grocery/dark-mode/candy.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="candy-icon"
                                />
                            </div>
                            <h4 className=" text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Candy</h4>
                        </div>
                        <ul className="mt-5">
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Shop All</li>
                            <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Better for You</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Chocolate</li>
                            <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Sugar Free Candy</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Gum</li>
                            <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Mints</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">On-the-Go</li>

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
                                <Image src={"/images/icons/header/dropDownMenu/grocery/dark-mode/beverage.svg"} height={"0"} width={"0"}
                                    className="w-5 h-5 absolute right-[-15%] bottom-[-15%] hidden dark:block" alt="drink-icon"
                                />
                            </div>
                            <h4 className=" text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] text-base font-semibold font-['Gordita'] leading-normal">Beverages</h4>
                        </div>
                        <ul className="mt-5">
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Shop All</li>
                            <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-medium font-['Gordita'] leading-tight">Water</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Soft Drinks</li>
                            <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Fruit Juice</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Sport Drinks</li>
                            <li className="ml-[4rem] my-4 text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Energy Drinks</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight">Tea</li>
                            <li className="ml-[4rem] text-gray-900  dark:text-[var(--text-color-icon-dark-mode)] hover:text-sky-600 text-sm font-normal font-['Gordita'] leading-tight mt-4">Hot Chocolate & Coca</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default GroceryMenu;
