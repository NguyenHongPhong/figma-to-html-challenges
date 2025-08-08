'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Category, Product } from "./types";
import Heart from "./components/heart/Heart";
import FilterTooltip from "./components/filterTooltip/FilterTooltip";


export default function Home() {
  const defaultUrl = `/images/sections/section-1/`;
  const [categories, setCategories] = useState<Category[]>();
  const [products, setProducts] = useState<Product[]>();
  const [isOpenFilterTool, setIsOpenFilterTool] = useState(false);

  const handleHeartToggle = (id: number) => {
    if (products) {
      const updatedProducts = [...products];
      updatedProducts[id].hearted = !updatedProducts[id].hearted;
      setProducts(updatedProducts);
    }
  }

  useEffect(() => {
    const categoriesData: Category[] = [{ url: `category-cost-24-150.png`, price: "$24 - $150", description: "New sumatra mandeling coffe blend" },
    { url: `category-cost-32-160.png`, price: "$32 - $160", description: "Espresso Arabica and Robusta Beans" },
    { url: `category-cost-37-160.png`, price: "$37 - $160", description: "Lavazza Top Class Whole Bean Coffee Blend" }
    ]
    const productData: Product[] = [
      {
        url: "/images/sections/products/coffee-beans.png",
        name: "Coffee Beans - Espresso Arabica and Robusta Beans",
        price: "$47.00",
        rate: "4.3",
        hearted: false,
        alt: "coffee-beans"
      }, {
        url: "/images/sections/products/lavazza-coffee-blends.png",
        name: "Lavazza Coffee Blends - Try the Italian Espresso",
        price: "$36.00",
        rate: "3.4",
        hearted: false,
        alt: "coffee-blend"
      },
      {
        url: "/images/sections/products/caffe-espresso-black-tin.png",
        name: "Lavazza - Caffè Espresso Black Tin - Ground coffee",
        price: "$99.00",
        rate: "5.0",
        hearted: false,
        alt: "caffee-expresso-black-tin"
      },
      {
        url: "/images/sections/products/espresso-coffee-beans.png",
        name: "Qualità Oro Mountain Grown - Espresso Coffee Beans",
        price: "$38.65",
        rate: "4.4",
        hearted: false,
        alt: "esspresso-coffee-beans"
      },

    ];
    setCategories(categoriesData);
    setProducts(productData);
  }, [])


  return (
    <div className=" bg-[rgba(245,245,246)] dark:bg-[rgba(41,46,57)] lg:h-[100%]">
      <div className="@container">
        <div className="flex pl-[1rem] lg:pl-[3rem] bg-[rgba(119,218,230)] rounded-[10px] overflow-hidden">
          <div className="flex flex-col py-[1.5rem] w-1/2">
            <h1 className=" text-white text-base md:text-4xl lg:text-5xl font-bold font-['Gordita'] leading-snug">ORDER YOUR
              <br />FAVORITE COFFEE</h1>
            <div className="text-white flex items-center mt-20">
              <span className="mr-4">1</span>
              <div className="flex items-center">
                <Image src={'/images/ui/banner/Ellipse 59.svg'} height={"0"}
                  className="w-3.5 h-3.5"
                  width={"0"} alt=""
                />
                <div className="w-20 md:w-44 h-[3px] bg-white"></div>
                <Image src={'/images/ui/banner/Ellipse 59.svg'} height={"0"}
                  className="w-3.5 h-3.5 mr-4"
                  width={"0"} alt=""
                />
              </div>
              <span>5</span>
            </div>
          </div>
          <div className="w-1/2 relative">
            <Image src={'/images/ui/banner/angle-table-3d.svg'}
              className=" w-full h-32 bottom-[-2px] right-0 absolute md:h-[120%] md:bottom-[-24%]
              md:w-[84%] lg:bottom-[-11%] lg:w-full lg:h-full
               xl:h-[133%] xl:left-0 2xl:h-[160%] 2xl:bottom-[-30%] "
              height={"0"} width={"0"} alt="" />
            <Image src={'/images/ui/banner/angle-table-shadow.svg'}
              className="w-11/12 h-28 bottom-[-22%] left-0 absolute md:bottom-[-11%]
              md:w-[90%]
              lg:h-full lg:w-full lg:left-[-1%] lg:bottom-[-48%]
              xl:h-full xl:w-full xl:left-[-19px] xl:bottom-[-48%]
              2xl:h-[120%] 2xl:bottom-[-75%]
              "
              height={"0"} width={"0"} alt="" />
            <div className="bg-[url(/images/banner/coffee.png)] w-20 lg:w-[41%] h-28 
              md:h-[72%] md:w-[36%] md:left-[38%]
             lg:h-[70%] lg:bottom-[26%] lg:left-[23%] xl:w-[36%] xl:h-[81%] xl:left-[24%] xl:bottom-[17%]
             bg-cover bg-center absolute bottom-[20%] left-[30%] "></div>
            <div className="bg-[url(/images/banner/plastic-cup-of-tea.png)] w-10 h-14 bg-cover bg-center 
          absolute bottom-[15%] left-[65%] md:h-[39%] md:w-[18%]  lg:h-[30%] lg:w-[20%] lg:left-[55%] lg:bottom-[23%]
          xl:h-[57%] xl:w-[21%] xl:bottom-[7%] xl:left-[52%]
          "></div>
          </div>
        </div>
        <section>
          <div className="mt-5">
            <h2 className=" text-gray-900 text-xl font-bold font-['Gordita'] leading-loose dark:text-white">Browse Categories</h2>
            <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3">
              {
                categories?.map((category, index) => (
                  <Link key={index} href={"#category-1"} className="bg-white dark:bg-[rgba(23,28,40)] rounded-[10px]" >
                    <article>
                      <figure className="flex p-4">
                        <div className="mr-5 rounded-sm dark:bg-[rgba(41,46,57)]">
                          <img src={`${defaultUrl}${category.url}`}
                            className="w-20 h-20" alt={`category-${index}`}
                          />
                        </div>
                        <figcaption className="w-[70%] dark:text-white justify-center flex flex-col">
                          <span className="text-gray-900 text-lg font-bold font-['Gordita'] leading-relaxed dark:text-white">
                            {category.price}
                          </span>
                          <p className=" text-grey-900 text-md font-normal font-['Gordita'] leading-tight">
                            {category.description}
                          </p>
                        </figcaption>
                      </figure>
                    </article>
                  </Link>
                ))
              }
            </div>
          </div>
        </section>
        <div>
          <div className="flex justify-between mt-10">
            <div className="text-gray-900 text-xl font-bold font-['Gordita'] leading-loose dark:text-white">Total LavAzza 1320</div>
            <div className={`flex items-center bg-white p-2.5 dark:bg-[var(--bg-dark-mode-primary)] relative group`}
              onClick={() => {
                setIsOpenFilterTool(!isOpenFilterTool)
              }}>
              <div className=" text-gray-900 dark:text-white text-base font-medium font-['Gordita'] leading-normal mr-5 group-hover:cursor-pointer">Filter</div>
              <Image src={`/images/icons/products/Filter.svg`} height={"0"} width={"0"}
                className="w-4 h-3.5 dark:hidden group-hover:cursor-pointer" alt="filter-icon"
              />
              <Image src={`/images/icons/products/Filter-dark-mode.svg`} height={"0"} width={"0"}
                className="w-4 h-3.5 hidden dark:block group-hover:cursor-pointer" alt="filter-dark-mode"
              />
              <FilterTooltip isOpenFilter={isOpenFilterTool} onChange={setIsOpenFilterTool} />
            </div>
          </div>
          <div className="grid grid-cols-1 mt-10 gap-9 lg:grid-cols-4 md:grid-cols-2  lg:gap-8">
            {products?.map((product, index) => (
              <Link key={index} href={`#product-${index}`} className="group">
                <article className="flex justify-center h-full group-hover:cursor-pointer group-hover:opacity-85">
                  <figure className="bg-white relative p-4 w-11/12 dark:bg-[var(--bg-dark-mode-primary)] rounded-[20px] lg:h-[90%]">
                    <img src={`${product.url}`} className="w-72 h-72 lg:h-[50%]" alt={`${product.alt}`} />
                    <div className="w-12 h-12 bg-white dark:bg-[var(--bg-dark-mode-secondary)] rounded-full shadow-[0px_20px_60px_6px_rgba(124,124,124,0.20)] 
                    absolute right-8 top-[250px] lg:right-1/12 lg:top-2/5 lg:h-6 lg:w-6">
                      <div className="w-full h-full flex justify-center items-center">
                        <Heart index={index} isHearted={product.hearted} onChange={handleHeartToggle} />
                      </div>
                    </div>
                    <figcaption className="flex flex-col mt-4">
                      <div className="text-gray-900 text-lg font-bold font-['Gordita'] leading-normal dark:text-white line-clamp-2">{product.name}</div>
                      <div className=" text-zinc-400 text-lg font-normal font-['Gordita'] leading-snug my-2">Lavazza</div>
                      <div className="inline-flex justify-between">
                        <div className="flex justify-end">
                          <div className="text-gray-900 text-base h-[20px] font-semibold font-['Gordita'] leading-normal dark:text-white">
                            {product.price}</div></div>
                        <div className="flex items-end gap-1.5">
                          <Image src={`/images/icons/products/Star.svg`} height={"0"} width={"0"}
                            className="w-4 h-4"
                            alt="" />
                          <div className="w-7 h-5 text-right text-gray-900 text-lg font-semibold font-['Gordita'] leading-normal dark:text-white">{product.rate}</div>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
