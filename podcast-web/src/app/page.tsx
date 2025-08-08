"use client"
import Image from "next/image";
import CircleImage from "./components/CircleImage";
import LogoIcon from "./components/LogoIcon";
import Link from "next/link";
import { useState, useEffect } from "react";
import ImageSlider from "./components/ImageSlider";
import CircleGroup from "./components/CircleGroup";
import StaticSlide from "./components/StaticSlide";
export default function Home() {
  const [checked, setChecked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCloseLink, setIsCloseLink] = useState(false);
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  useEffect(() => {
    setViewportWidth(window.innerWidth);
  }, []);

  const handleStateInput = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const inputToDisplayLink = document.querySelector('#status-drop-down-list') as HTMLInputElement;
    const inputToClose = document.querySelector('#status-side-bar') as HTMLInputElement;

    if (isCloseLink) {
      inputToDisplayLink.checked = !inputToDisplayLink.checked;
      setIsCloseLink(!isCloseLink);
    };

    inputToClose.checked = !inputToClose.checked;
  };

  const handleLabelClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const inputToDisplayLink = document.querySelector('#status-drop-down-list') as HTMLInputElement;
    inputToDisplayLink.checked = !inputToDisplayLink.checked;
    setIsCloseLink(!isCloseLink);
  };

  const handleLabelClickLg = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const inputToDisplayLink = document.querySelector('#status-drop-down-list-lg') as HTMLInputElement;
    inputToDisplayLink.checked = !inputToDisplayLink.checked;
    setIsCloseLink(!isCloseLink);
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-16 py-10 bg-[var(--bg-primary)] overflow-x-hidden">
      <header className="bg-[var(--bg-primary)]">
        <div className="@container">
          <div className="flex justify-between items-center lg:grow-1">
            <Image src={`/images/logos/Logo.svg`} width="0" height="0" alt="Logo"
              style={{ width: "30%", height: "30px" }}
            />
            <nav className="max-lg:hidden flex justify-between text-lg grow-1">
              <Link href="#episode">Episode</Link>
              <Link href="#">Trending</Link>
              <div className="relative group hover:cursor-pointer">
                <label htmlFor="status-drop-down-list-lg" className="flex peer" onClick={handleLabelClickLg}>Category
                  <input id="status-drop-down-list-lg" type="checkbox" className="hidden" />
                  <Image src={'/images/icons/header/Vector 1.svg'}
                    className="ml-3 mt-1 h-auto w-auto"
                    height={12} width={12} alt="Dropdown icon" />
                </label>
                <div className="absolute bottom-[-80px] w-full opacity-0 pointer-events-none left-1/2 -translate-x-1/2
                        transition-opacity duration-300 ease-linear peer-has-checked:opacity-100 peer-has-checked:pointer-events-auto
                    ">
                  <div className="relative">
                    <div className=" drop-shadow-md bottom-0 right-0 -translate-x-1/2 absolute
                                      w-0 h-0
                                      border-l-8 border-r-8 border-b-8
                                      border-l-transparent border-r-transparent border-b-white">
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-sm bg-white rounded-sm p-1 shadow-md">
                    <Link className="hover:text-violet-500 underline" href="#">Working </Link>
                    <Link className="hover:text-violet-500 underline" href="#">Loving</Link>
                    <Link className="hover:text-violet-500 underline" href="#">Happiness</Link>
                    <span className="text-red-500 text-base font-bold inline-block hover:cursor-pointer" onClick={handleLabelClickLg}>Close</span>

                  </div>
                </div>
              </div>
              <Link href="#">Blog</Link>
            </nav>
            <label htmlFor="status-side-bar" className="peer md:grow md:text-right md:pr-5 lg:hidden">
              &#9776;
              <input id="status-side-bar" type="checkbox" className="hidden" />
            </label>
            <div className="z-20 fixed w-full md:w-1/2 h-full bg-white pointer-events-none top-0 right-0 translate-x-full
            transition-all duration-300 ease-linear peer-has-checked:translate-x-0 peer-has-checked:opacity-100
            peer-has-checked:pointer-events-auto 
            ">
              <div className="relative @container">
                <label htmlFor="status-side-bar" className="absolute right-5 top-3.5 text-6xl text-red-500" onClick={handleStateInput
                }>&times;</label>
                <div className="flex flex-col items-center text-2xl mt-24">
                  <Link href="#episode">Episode</Link>
                  <hr className="w-4/5 h-2 mt-2.5" />
                  <Link href="#">Trending</Link>
                  <hr className="w-4/5 h-2 mt-2.5" />
                  <div className="relative group hover:cursor-pointer">
                    <label htmlFor="status-drop-down-list" className="flex peer" onClick={handleLabelClick}>Category
                      <input id="status-drop-down-list" type="checkbox" className="hidden" />
                      <Image src={'/images/icons/header/Vector 1.svg'}
                        className="ml-3 mt-1 h-auto w-auto"
                        height={12} width={12} alt="Dropdown icon" />
                    </label>
                    <div className="absolute bottom-[-80px] w-full opacity-0 pointer-events-none left-1/2 -translate-x-1/2
                        transition-opacity duration-300 ease-linear peer-has-checked:opacity-100
                    ">
                      <div className="relative">
                        <div className=" drop-shadow-md bottom-0 right-0 -translate-x-1/2 absolute
                                      w-0 h-0
                                      border-l-8 border-r-8 border-b-8
                                      border-l-transparent border-r-transparent border-b-white">
                        </div>
                      </div>
                      <div className="flex flex-col items-center text-sm bg-white rounded-sm p-1 shadow-md">
                        <Link className="hover:text-violet-500 underline" href="#">Working </Link>
                        <Link className="hover:text-violet-500 underline" href="#">Loving</Link>
                        <Link className="hover:text-violet-500 underline" href="#">Happiness</Link>
                      </div>
                    </div>
                  </div>
                  <hr className="w-4/5 h-2 mt-2.5" />
                  <Link href="#">Blog</Link>
                  <hr className="w-4/5 h-2 mt-2.5" />
                  <Link href="#">Login</Link>
                  <hr className="w-4/5 h-2 mt-2.5" />
                  <Link href="#">Signup</Link>
                  <hr className="w-4/5 h-2 mt-2.5" />
                </div>
              </div>
            </div>
            <label htmlFor="status-side-bar" className="fixed inset-0 w-full h-full z-10 pointer-events-none opacity-0 transition-opacity
            duration-300 bg-black/40 ease-in-out peer-has-checked:opacity-100 peer-has-checked:pointer-events-auto
            "></label>
            <div className="flex max-md:hidden lg:grow-1 lg:justify-end">
              <button className="text-right text-gray-900 text-base font-semibold font-['Plus_Jakarta_Sans'] leading-7 mr-5">Log in</button>
              <div className="w-28 h-12 bg-gray-900 rounded-md flex justify-center items-center">
                <button className="w-14 h-7 text-white text-base font-semibold font-['Plus_Jakarta_Sans'] leading-7">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="grid grid-cols-1 gap-32">
        <section className="bg-[var(--bg-primary)]">
          <div className="@container">
            <div className="flex flex-col justify-between md:flex-row">
              <div className="flex justify-between md:w-[45%]">
                <div className="w-[47.5%]">
                  <div className="bg-[url(/images/hero/hero-left.png)] h-[250px] bg-cover bg-[center] rounded relative md:rounded-lg">
                    <Image src={'/images/ui/section-1/sound-effect.svg'} height="0" width="0" alt="soundEffect"
                      style={{ height: "100%", width: "100%", position: "absolute", bottom: "-131px" }}
                    />
                  </div>
                  <div className="mt-9 z-10">
                    <div className=" text-gray-900 text-base font-semibold font-['Plus_Jakarta_Sans'] leading-none">Podcast listener</div>
                    <div className="flex mt-4">
                      <CircleImage src="/images/ui/section-1/podcast-listener-1.png" alt="listener-1" leftPosition="-12px" />
                      <CircleImage src="/images/ui/section-1/podcast-listener-2.png" alt="listener-2" leftPosition="2px" translateX="-translate-x-[30%]" />
                      <CircleImage src="/images/ui/section-1/podcast-listener-3.png" alt="listener-3" leftPosition="-12px" translateX="-translate-x-[60%]" />
                      <CircleImage src="/images/ui/section-1/podcast-number.jpg" alt="podcast-number" children="+50K" translateX="-translate-x-[90%]" />
                    </div>
                  </div>

                </div>
                <div className="w-[47.5%]">
                  <div>
                    <div className="flex justify-center items-center">
                      <Image src={`/images/ui/section-1/vector-top-left.svg`} height="0" width="0"
                        className="w-7 h-6 mr-3.5"
                        alt="vector-left"></Image>
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-orange-400 flex flex-col justify-center items-center">
                        <div className="text-white text-[8.31px] md:text-sm font-extrabold font-['Plus_Jakarta_Sans'] leading-[8.31px] md:mb-2">500+</div>
                        <div className="text-orange-50 text-[5.93px] md:text-sm font-medium font-['Plus_Jakarta_Sans'] leading-[5.93px]">Podcasts</div>
                      </div>
                    </div>
                    <div className="flex justify-evenly my-5">
                      <LogoIcon src="/images/logos/section-1/logo-icon-1.png" height="25px" width="25px" alt="Spotify logo" />
                      <LogoIcon src="/images/logos/section-1/logo-icon-2.png" height="25px" width="25px" alt="Google podcast logo" />
                      <LogoIcon src="/images/logos/section-1/logo-icon-3.png" height="25px" width="25px" alt="Apple podcast logo" />
                      <Image src={`/images/ui/section-1/vector-bottom-right.svg`} height="0" width="0"
                        className="w-7 h-6 mr-3.5"
                        alt="vector-left"></Image>
                    </div>
                  </div>
                  <div className="bg-[url(/images/hero/hero-right.png)] h-[250px] bg-cover bg-center relative md:rounded-lg">
                    <div className="bottom-4 left-1/2 -translate-x-1/2 absolute">
                      <div className="w-28 h-9 bg-white/40 rounded-md shadow-[0px_7.119453430175781px_26.104663848876953px_0px_rgba(0,0,0,0.07)] backdrop-blur-[2.97px] flex flex-col justify-center items-center">
                        <div className="text-center text-gray-900 text-[8.31px] font-semibold font-['Plus_Jakarta_Sans'] leading-[8.31px]">Sarah Taylor</div>
                        <div className="text-center text-zinc-500 text-[7.12px] font-normal font-['Plus_Jakarta_Sans'] leading-[7.12px]">Song podcaster</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 md:w-[45%]">
                <h1 className="w-full text-gray-900 text-4xl font-bold font-['Plus_Jakarta_Sans'] leading-10 lg:text-7xl lg:leading-16">A new era of podcasting for you</h1>
                <p className="w-full text-zinc-500 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-normal my-6 lg:text-lg">Rebuilt for simplicity and speed, so you can spend more time discovering and listening to great podcasts.</p>
                <div className="flex justify-between w-4/5 md:w-full lg:w-3/5">
                  <button className="w-40 h-16 bg-violet-500 rounded-lg text-white hover:cursor-pointer hover:opacity-95">Get Started</button>
                  <div className="flex items-center hover:cursor-pointer group">
                    <div className=" text-gray-900 text-lg font-semibold font-['Plus_Jakarta_Sans'] leading-loose mr-2.5 ">Listen now</div>
                    <Image src={'/images/icons/section-1/Play.svg'} className="w-4 h-4"
                      height="0" width="0" alt="Playing icon"></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="@container">
            <div className="md:flex md:flex-row-reverse md:justify-between">
              <div className="relative h-60 md:w-[45%]">
                <img className="w-24 h-24 absolute left-2/6" src={'/images/logos/section-2/apple-podcast.png'} alt="Apple podcast logo" />
                <img className="absolute w-12 h-12 rounded-xl top-1/2 -translate-y-1/2" src='/images/logos/section-2/pocket-cast.png' alt="Pocket cast logo" />
                <img className="absolute w-20 h-20 rounded-xl bottom-0 left-1/4" src='/images/logos/section-2/spotify.png' alt="Spotify logo" />
                <img className="absolute w-20 h-20 rounded-xl bottom-8 right-[10%]" src='/images/logos/section-2/google-podcast.png' alt="Google podcast logo" />
                <img className="absolute w-20 h-20 rounded-xl top-5 right-0" src='/images/logos/section-2/sound-cloud.png' alt="Sound Cloud logo" />
                <div className="w-44 h-44 opacity-40 bg-orange-400 rounded-full blur-[129px] left-1/2 -translate-x-1/2 absolute
                  top-1/2 -translate-y-1/2
                "></div>
              </div>
              <div className="mt-10 md:w-[45%]">
                <h2 className=" text-gray-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-9 lg:text-5xl lg:leading-11">We are in the top padcast
                  directories</h2>
                <p className=" text-zinc-500 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-normal my-5 lg:text-base">Rebuilt for
                  simplicity and speed, so you can spend more time discovering and listening to great podcasts. We are everywhere
                  on the internet.</p>
                <button className="w-40 h-16 bg-violet-500 rounded-lg hover:cursor-pointer hover:opacity-95">
                  <div className="text-white flex items-center justify-center">
                    <div className="text-lg font-semibold font-['Plus_Jakarta_Sans'] leading-loose mr-3">Listen now</div>
                    <Image src={'/images/icons/section-2/Play.svg'} className="w-4 h-4 text-violet-500"
                      height="0" width="0" alt="Playing icon"></Image>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="@container">
            <div>
              <div>
                <h2 className="text-center text-gray-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-9 lg:text-5xl">Listen by category</h2>
                <div className="text-center lg:mx-auto lg:mt-4 text-zinc-500 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-normal lg:text-base
                 w-[32%]
                ">Listen all kind of podcasts you like by exploring categories. Make your day even better</div>
              </div>
              <div className="grid grid-cols-1 gap-5 place-items-center my-8 md:grid-cols-3 lg:grid-cols-4 lg:items-start">
                <Link href={'/#'} className="w-full lg:row-span-3 lg:h-[97%]">
                  <div className="h-[550px] md:h-72 lg:h-full rounded-lg relative bg-[url(/images/sections/section-3/education.png)] bg-cover bg-[15%] lg:bg-[20%]">
                    <div className="w-full h-20 bg-white/20 backdrop-blur-[10px] absolute bottom-0  rounded-br-lg rounded-bl-lg pl-8">
                      <div className="mt-2">
                        <div className="flex items-center">
                          <div className="text-white text-lg font-semibold font-['Plus_Jakarta_Sans'] leading-loose mr-2.5">Education</div>
                          <Image src={'/images/icons/section-3/Icon.svg'} height="0" width="0" className="h-3.5 w-3.5" alt="Arrow right icon" />
                        </div>
                        <div className=" text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-normal ">120 Podcasts Channel</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={'/'} className="w-full lg:col-span-2 lg:h-full">
                  <div className="h-52 lg:h-full rounded-lg relative bg-[url(/images/sections/section-3/health-care.png)] bg-cover bg-[15%]">
                    <div className="w-full h-20 bg-white/20 backdrop-blur-[10px] absolute bottom-0 pl-8 rounded-br-lg rounded-bl-lg">
                      <div className="mt-2">
                        <div className="flex items-center">
                          <div className="text-white text-lg font-semibold font-['Plus_Jakarta_Sans'] leading-loose mr-2.5">Healthcare</div>
                          <Image src={'/images/icons/section-3/Icon.svg'} height="0" width="0" className="h-3.5 w-3.5" alt="Arrow right icon" />
                        </div>
                        <div className=" text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-normal">120 Podcasts Channel</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={'/'} className="md:w-full">
                  <div className="w-64 md:w-full h-72 rounded-lg relative bg-[url(/images/sections/section-3/music.png)] bg-cover bg-center">
                    <div className="w-full h-20 bg-white/20 backdrop-blur-[10px] absolute bottom-0 pl-8 rounded-br-lg rounded-bl-lg">
                      <div className="mt-2">
                        <div className="flex items-center">
                          <div className="text-white text-lg font-semibold font-['Plus_Jakarta_Sans'] leading-loose mr-2.5">Music</div>
                          <Image src={'/images/icons/section-3/Icon.svg'} height="0" width="0" className="h-3.5 w-3.5" alt="Arrow right icon" />
                        </div>
                        <div className=" text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-normal">120 Podcasts Channel</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={'/'} className="md:w-full">
                  <div className="w-64 h-72 md:w-full rounded-lg relative bg-[url(/images/sections/section-3/fashion.png)] bg-cover bg-center">
                    <div className="w-full h-20 bg-white/20 backdrop-blur-[10px] absolute bottom-0 pl-8 rounded-br-lg rounded-bl-lg">
                      <div className="mt-2">
                        <div className="flex items-center">
                          <div className="text-white text-lg font-semibold font-['Plus_Jakarta_Sans'] leading-loose mr-2.5">Fashion</div>
                          <Image src={'/images/icons/section-3/Icon.svg'} height="0" width="0" className="h-3.5 w-3.5" alt="Arrow right icon" />
                        </div>
                        <div className=" text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-normal">120 Podcasts Channel</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={'/'} className="w-full lg:col-span-2 lg:h-full">
                  <div className="h-52 lg:h-full rounded-lg relative bg-[url(/images/sections/section-3/comedy.png)] bg-cover bg-[15%]">
                    <div className="w-full h-20 bg-white/20 backdrop-blur-[10px] absolute bottom-0 pl-8 rounded-br-lg rounded-bl-lg">
                      <div className="mt-2">
                        <div className="flex items-center">
                          <div className="text-white text-lg font-semibold font-['Plus_Jakarta_Sans'] leading-loose mr-2.5">Comedy</div>
                          <Image src={'/images/icons/section-3/Icon.svg'} height="0" width="0" className="h-3.5 w-3.5" alt="Arrow right icon" />
                        </div>
                        <div className=" text-white text-sm font-normal font-['Plus_Jakarta_Sans'] leading-normal">120 Podcasts Channel</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center hover:cursor-pointer hover:opacity-90">
                <button className=" w-40 h-16 bg-gray-900 rounded-lg text-white">
                  All category
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[var(--bg-section-4)]">
          <div className="@container">
            <div className="relative">
              <h2 className="w-[72%] text-gray-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-9 lg:text-5xl">Our most popular episodes</h2>
              <ImageSlider isShowAll={checked} indexDot={activeIndex} isMdView={viewportWidth >= 768 && true} />
              <StaticSlide isShowAll={checked} indexDot={activeIndex} />

              <div className={`flex justify-center mt-4 mb-7 ${checked || viewportWidth >= 768 && `hidden`}`}>
                <CircleGroup activeIndex={activeIndex} onChange={setActiveIndex} />
              </div>

              <div className={`${viewportWidth >= 768 && `hidden`} w-40 h-16 bg-gray-900 rounded-lg hover:cursor-pointer
               hover:opacity-85 flex justify-center items-center`}>
                <button className="text-white" onClick={() => setChecked(!checked)}> {checked ? `Fewer Episodes` : `All episodes`}</button>
              </div>

            </div>
          </div>
        </section>
        <section>
          <div className="@container">
            <div className="md:flex md:justify-between md:flex-row-reverse">
              <div className="md:w-[45%] lg:flex lg:flex-col lg:justify-center">
                <Image src={'/images/ui/section-5/Union.svg'}
                  className="w-11 h-9"
                  height="0" width="0" alt="Double quotation mark"
                />
                <h2 className="text-gray-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-9 my-4 lg:text-5xl lg:leading-12">What our listeners saying about us</h2>
                <p className=" text-zinc-500 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-normal lg:text-base">Whoa whoa, let me take some notes! A wealth of audio knowledge. Every episode
                  is a gem! I’ve upped my game considerably since I started listening. Really a wonderful platform for podcasts.</p>
                <div className=" text-zinc-400 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-normal mt-4 lg:text-base">Scott Adams</div>
              </div>
              <div className="h-64 lg:h-96 relative md:w-[45%]">
                <div className="h-full w-3/5  absolute bottom-0 bg-[url(/images/sections/section-5/listener-1.png)] bg-cover 
                bg-center right-0 rounded-lg">
                </div>
                <div className="h-3/5 lg:h-72 w-1/2 absolute bg-[url(/images/sections/section-5/listener-2.png)] bg-cover 
                bg-center left-0 rounded-lg bottom-14"></div>
                <div className="absolute bottom-0 left-2/12">
                  <Image src={'/images/ui/section-5/Dot.svg'} className="w-7 h-1.5"
                    height="0" width="0" alt="Dot ui" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[var(--bg-section-5)] rounded-xl md:bg-transparent">
          <div className="@container">
            <div className="py-10 md:bg-[var(--bg-section-5)] md:rounded-xl md:px-10 lg:relative">
              <div className="md:flex md:justify-between">
                <h2 className=" text-white text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-9 md:w-[45%] lg:text-5xl lg:leading-12">Subscribe and get update
                  regularly</h2>
                <p className="text-zinc-400 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-normal mt-4 md:w-[45%] lg:text-base">Rebuilt for
                  simplicity and speed, so you can spend more time discovering and listening to great podcasts. Get all the
                  updates of latest podcasts.</p>
              </div>
              <div className="mt-5 relative h-[244px] lg:flex lg:items-center lg:w-full lg:justify-between">
                <div className="w-full lg:w-[40%] h-16 bg-[var(--bg-input-section-5)] rounded-lg">
                  <input type="text" className="w-full h-full p-5 text-white rounded-lg" placeholder="Your name" />
                </div>
                <div className="w-full lg:w-[40%] h-16 bg-[var(--bg-input-section-5)] rounded-lg my-4">
                  <input type="email" className="w-full h-full p-5 text-white rounded-lg" placeholder="Your email address" />
                </div>
                <div className="w-2/5 lg:w-[15%] h-16 bg-violet-500 rounded-lg flex justify-between items-center text-white md:ml-[50%]
                lg:ml-0 lg:translate-x-0 md:-translate-x-1/2">
                  <button className="w-full">Subscribe</button>
                </div>
                <Image src={'/images/ui/section-5/abstract.svg'}
                  className="w-28 h-20 absolute right-0 bottom-[-25px]"
                  height={"0"} width={"0"} alt="Abstract svg" />
                <Image src={'/images/ui/section-6/Star 3.svg'}
                  className="w-6 h-6 absolute left-0 bottom-0 lg:block hidden"
                  height={"0"} width={"0"} alt="Star svg" />
                <Image src={'/images/ui/section-6/Star 2.svg'}
                  className="w-6 h-6 absolute right-0 bottom-3/4 lg:block hidden"
                  height={"0"} width={"0"} alt="Star svg" />
              </div>
              <Image src={'/images/ui/section-6/Star 1.svg'}
                className="w-6 h-6 absolute left-1/2 top-6 z-20 hidden lg:block"
                height={"0"} width={"0"} alt="Star svg" />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-orange-50">
        <div className="@container">
          <div className="lg:flex lg:justify-between">
            <div className="md:flex md:items-center md:justify-between lg:flex-col lg:w-[30%] lg:items-start">
              <Image src={`/images/logos/Logo.svg`} width="0" height="0" alt="Logo"
                style={{ width: "30%", height: "30px" }}
              />
              <p className="w-64 text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans'] leading-7
              my-3.5
              ">Copyright © 2022
                UIHUT all rights reserved.</p>
              <Image src={'/images/icons/foot/Social.svg'}
                className="w-32 h-9"
                height={"0"} width={"0"} alt="Social icons" />
            </div>
            <div className="mt-5 md:grid md:grid-cols-3 md:place-items-center lg:w-[50%] lg:mt-0">
              <ul className="md:h-full">
                <li className="text-gray-900 text-xl font-bold font-['Plus_Jakarta_Sans'] leading-loose">Linkes</li>
                <li className="text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans'] leading-7 hover:text-violet-500
                "><a href="#">Home</a></li>
                <li className="text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans'] leading-7 hover:text-violet-500
                "><a href="#">Episodes</a></li>
                <li className="text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans'] leading-7 hover:text-violet-500
                "><a href="#">Trending</a></li>
                <li className="text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans'] leading-7 hover:text-violet-500
                "><a href="#">Category</a></li>
                <li className="text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans'] leading-7 hover:text-violet-500
                "><a href="#">Blog</a></li>
              </ul>

              <ul className="md:h-full">
                <li className="text-gray-900 text-xl font-bold font-['Plus_Jakarta_Sans'] leading-loose">Features</li>
                <li className="text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans'] leading-7 hover:text-violet-500
                "><a href="#">Style guide</a></li>
                <li className="text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans'] leading-7 hover:text-violet-500
                "><a href="#">Instructions</a></li>
                <li className="text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans'] leading-7 hover:text-violet-500
                "><a href="#">Catelog</a></li>
                <li className="text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans'] leading-7 hover:text-violet-500
                "><a href="#">Your podcast</a></li>
              </ul>

              <ul className="md:h-full">
                <li className="text-gray-900 text-xl font-bold font-['Plus_Jakarta_Sans'] leading-loose">Company</li>
                <li className="text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans'] leading-7 hover:text-violet-500
                "><a href="#">SPrivacy</a></li>
                <li className="text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans'] leading-7 hover:text-violet-500
                "><a href="#">Terms</a></li>
                <li className="text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans'] leading-7 hover:text-violet-500
                "><a href="#">Security</a></li>
                <li className="text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans'] leading-7 hover:text-violet-500
                "><a href="#">Cookies </a></li>
              </ul>
            </div>
            <div className="md:flex md:justify-center md:items-center lg:flex-col lg:w-[20%] lg:justify-start lg:items-start">
              <div className="text-gray-900 text-xl font-bold font-['Plus_Jakarta_Sans'] leading-loose md:mr-10">Listen on</div>
              <div className="flex w-1/2 justify-between md:w-1/4 lg:w-1/2">
                <LogoIcon src={'/images/icons/foot/spotify.png'} height="7" width="7" round="lg" alt="spotify-logo" />
                <LogoIcon src={'/images/icons/foot/google-podcast.png'} height="7" width="7" round="lg" alt="google-podcast-logo" />
                <LogoIcon src={'/images/icons/foot/sound-cloud.png'} height="7" width="7" round="lg" alt="sound-cloud-logo" />
                <LogoIcon src={'/images/icons/foot/apple-podcast.png'} height="7" width="7" round="lg" alt="apple-podcast-logo" />
                <LogoIcon src={'/images/icons/foot/pocket-cast.png'} height="7" width="7" round="lg" alt="pocket-cast-logo" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
