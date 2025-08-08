import { useRef, useState } from "react";
import PriceCrossBar from "./PriceCrossBar";
import Image from "next/image";
import { IOpenFilter } from "../../types/index";

function FilterTooltip(props: IOpenFilter) {
    const { isOpenFilter, onChange } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenUnitMass, setIsOpenUnitMass] = useState(false);
    const [minCosting, setMinCosting] = useState("10.00");
    const [maxCosting, setMaxCosting] = useState("100.07");
    const [amount, setAmount] = useState(500);
    const [unitMass, setUnitMass] = useState("g");
    const [sizes, setSize] = useState<string[]>([]);
    const [branches, setBranches] = useState<string[]>([]);
    const [onInput, setOnInput] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formValues = {
            minPrice: minCosting,
            maxPrice: maxCosting,
            weight: amount,
            unit: unitMass,
            sizeProduct: sizes,
            branchProduct: branches,
            contentFinding: onInput
        }
        console.log(formValues);
    }

    const handleCloseFilterTool = (e: React.MouseEvent<HTMLDivElement>) => {
        onChange(!isOpenFilter);
    }

    const handleBranchChoosen = (id: string, branchName: string) => {
        const isDark = document.documentElement.classList.contains("dark");
        const branchChoosen = document.getElementById(id);
        if (isDark) {
            if (branchChoosen) {
                branchChoosen.classList.toggle("dark:text-white");
            };
        } else {
            if (branchChoosen) {
                const hasZinc = branchChoosen.classList.contains('text-zinc-400');
                if (hasZinc) {
                    branchChoosen.classList.remove("text-zinc-400");
                    branchChoosen.classList.add("text-black");
                } else {
                    branchChoosen.classList.add("text-zinc-400");
                    branchChoosen.classList.remove("text-black");
                }
            }
        }


        setBranches((preBranches) => {
            if (preBranches.length > 0) {
                if (preBranches.includes(branchName)) {
                    const newBranches = preBranches.filter(item => item != branchName);
                    return newBranches;
                }
            }
            return [...preBranches, branchName]
        });
    }

    const handleSizeChoosen = (id: string, size: string) => {
        const isDark = document.documentElement.classList.contains("dark");
        const elementChoosen = document.getElementById(id);
        if (isDark) {
            if (elementChoosen) {
                elementChoosen.classList.toggle("dark:text-white");
            };
        } else {
            if (elementChoosen) {
                const hasZinc = elementChoosen.classList.contains('text-zinc-400');
                if (hasZinc) {
                    elementChoosen.classList.remove("text-zinc-400");
                    elementChoosen.classList.add("text-black");
                } else {
                    elementChoosen.classList.add("text-zinc-400");
                    elementChoosen.classList.remove("text-black");
                }
            }
        }


        setSize((preSize) => {
            if (preSize.length > 0) {
                if (preSize.includes(size)) {
                    const newSizes = preSize.filter(item => item != size);
                    return newSizes;
                }
            }
            return [...preSize, size]
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOnInput(e.target.value);
    };

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    const handleAmount = (amount: number) => {
        setAmount(amount);
    }

    const handleContainerClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    return (<form className={`absolute bottom-0 w-[90vw] p-6 z-10 translate-y-[102%] -translate-x-[80%] md:-translate-x-[86%] 
        md:left-0 lg:-translate-x-[90%] xl:-translate-x-[93%] transition-opacity duration-200 ease-linear
    bg-white dark:bg-[var(--bg-dark-mode-secondary)] shadow-[0px_40px_90px_20px_rgba(0,0,0,0.40)] 
     ${isOpenFilter ? `opacity-100 h-fit pointer-events-auto -z-50` : `opacity-0 h-0 pointer-events-none `}}`} onSubmit={handleSubmit}
        onClick={handleContainerClick}
    >
        <div className="text-left text-gray-900 dark:text-white text-xl font-semibold font-['Gordita'] leading-loose">Filter
        </div>
        <div className="flex justify-between flex-col md:flex-row">
            <div className="w-full md:w-[30%]">
                <div className=" text-gray-900 dark:text-white text-xl font-semibold font-['Gordita'] leading-loose">Price</div>
                <PriceCrossBar minCost={minCosting} maxCost={maxCosting} onChangeMinCost={setMinCosting} onChangeMaxCost={setMaxCosting} />
            </div>
            <div className="w-px h-40 bg-[#D2D1D6] dark:bg-zinc-100 hidden md:block"></div>
            <div className="w-full h-0.5 dark:bg-zinc-100 bg-[#D2D1D6] md:hidden my-10"></div>
            <div className="w-full md:w-[30%]">
                <div className="dark:text-white text-[var(--bg-dark-mode-primary)]  text-xl font-medium font-['Gordita'] leading-loose">Size/Weight</div>
                <div className="px-3.5 py-[5px] rounded-md outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-between my-5">
                    <div className="inline-flex justify-between items-center w-[55%] relative hover:cursor-pointer" onClick={handleIsOpen}>
                        <div className="justify-start dark:text-white text-[var(--bg-dark-mode-primary)] text-sm font-medium font-['Gordita'] leading-tight">{amount}{unitMass}
                        </div>
                        <Image src={'/images/icons/filter/arrow-down.svg'}
                            className="w-3.5 h-1.5 hidden dark:block"
                            height={"0"} width={"0"} alt="" />

                        <Image src={'/images/icons/filter/ligh-mode/Arrow - Down 2.svg'}
                            className="w-3.5 h-1.5 dark:hidden"
                            height={"0"} width={"0"} alt="" />
                        <ul className={`
                                    absolute w-full bottom-0 bg-white dark:bg-[var(--bg-dark-mode-secondary)]
                                    ${isOpen ? 'h-[77px] opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}
                                    translate-y-[110%] rounded-md  py-[5px] transition-all duration-150 ease-in-out 
                                    text-gray-900 dark:text-white overflow-y-scroll border`}>

                            <li className="text-center dark:text-white text-[var(--bg-dark-mode-primary)]  text-sm font-medium font-['Gordita'] 
                                            leading-tight dark:hover:bg-blue-950 hover:bg-[var(--text-color-icon-dark-mode)]"
                                onClick={() => handleAmount(400)}
                            >400{unitMass}
                            </li>
                            <li className="text-center dark:text-white text-[var(--bg-dark-mode-primary)] text-sm 
                            font-medium font-['Gordita'] leading-tight my-2 dark:hover:bg-blue-950 hover:bg-[var(--text-color-icon-dark-mode)]"
                                onClick={() => handleAmount(300)}
                            >300{unitMass}
                            </li>
                            <li className="text-center dark:text-white text-[var(--bg-dark-mode-primary)] text-sm font-medium 
                            font-['Gordita'] leading-tight dark:hover:bg-blue-950 hover:bg-[var(--text-color-icon-dark-mode)]"
                                onClick={() => handleAmount(200)}
                            >200{unitMass}
                            </li>
                            <li className="text-center dark:text-white text-[var(--bg-dark-mode-primary)] text-sm 
                            font-medium font-['Gordita'] leading-tight my-2 dark:hover:bg-blue-950 hover:bg-[var(--text-color-icon-dark-mode)]"
                                onClick={() => handleAmount(100)}
                            >100{unitMass}
                            </li>
                            <li className="text-center dark:text-white text-[var(--bg-dark-mode-primary)] text-sm 
                            font-medium font-['Gordita'] leading-tight dark:hover:bg-blue-950 hover:bg-[var(--text-color-icon-dark-mode)]"
                                onClick={() => handleAmount(50)}
                            >50{unitMass}
                            </li>

                        </ul>
                    </div>
                    <div className="w-px h-9 rotate-180 bg-zinc-300"></div>
                    <div className={`inline-flex justify-between items-center w-[35%] relative hover:cursor-pointer`} onClick={() => { setIsOpenUnitMass(!isOpenUnitMass) }}>
                        <div className="justify-start dark:text-white text-[var(--bg-dark-mode-primary)] text-sm font-medium font-['Gordita'] leading-tight">{unitMass}</div>
                        <Image src={'/images/icons/filter/arrow-down.svg'}
                            className="w-3.5 h-1.5 hidden dark:block"
                            height={"0"} width={"0"} alt="" />
                        <Image src={'/images/icons/filter/ligh-mode/Arrow - Down 2.svg'}
                            className="w-3.5 h-1.5 dark:hidden"
                            height={"0"} width={"0"} alt="" />
                        <ul className={`
                                    absolute w-full bottom-0 bg-white dark:bg-[var(--bg-dark-mode-secondary)]
                                    ${isOpenUnitMass ? 'h-[77px] opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}
                                    translate-y-[110%] rounded-md  py-[5px] transition-all duration-150 ease-in-out 
                                    text-gray-900 dark:text-white overflow-y-scroll border
                        `}>

                            <li className="text-center dark:text-white text-[var(--bg-dark-mode-primary)] text-sm 
                            font-medium font-['Gordita'] leading-tight dark:hover:bg-blue-950 hover:bg-[var(--text-color-icon-dark-mode)]"
                                onClick={() => setUnitMass("mg")}
                            >Milligram
                            </li>
                            <li className="text-center dark:text-white text-[var(--bg-dark-mode-primary)] text-sm 
                            font-medium font-['Gordita'] leading-tight my-2 dark:hover:bg-blue-950 hover:bg-[var(--text-color-icon-dark-mode)]"
                                onClick={() => setUnitMass("g")}
                            >Gram
                            </li>
                            <li className="text-center dark:text-white text-[var(--bg-dark-mode-primary)] text-sm 
                            font-medium font-['Gordita'] leading-tight dark:hover:bg-blue-950 hover:bg-[var(--text-color-icon-dark-mode)]"
                                onClick={() => setUnitMass("kg")}
                            >Kilogram
                            </li>
                            <li className="text-center dark:text-white text-[var(--bg-dark-mode-primary)] text-sm 
                            font-medium font-['Gordita'] leading-tight my-2 dark:hover:bg-blue-950 hover:bg-[var(--text-color-icon-dark-mode)]"
                                onClick={() => setUnitMass("t")}
                            >Metric ton
                            </li>
                            <li className="text-center dark:text-white text-[var(--bg-dark-mode-primary)] text-sm 
                            font-medium font-['Gordita'] leading-tight dark:hover:bg-blue-950 hover:bg-[var(--text-color-icon-dark-mode)]"
                                onClick={() => setUnitMass("µg")}
                            >Microgram
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <div className="px-3 py-1.5 dark:bg-gray-900 bg-[#F8F8FB] rounded-md inline-flex justify-start items-start gap-2.5 hover:cursor-pointer hover:opacity-85">
                        <div id="small-size" className={`justify-start text-zinc-400 dark:hover:text-white text-sm font-medium font-['Gordita'] leading-tight`}
                            onClick={() => handleSizeChoosen("small-size", "small")}>Small</div>
                    </div>
                    <div className="px-3 py-1.5 dark:bg-gray-900 bg-[#F8F8FB] rounded-md inline-flex justify-start items-start gap-2.5 hover:cursor-pointer hover:opacity-85">
                        <div id="medium-size" className={`justify-start text-zinc-400 dark:hover:text-white text-sm font-medium font-['Gordita'] leading-tight`}
                            onClick={() => handleSizeChoosen("medium-size", "medium")}
                        >Medium</div>
                    </div>
                    <div className={`px-3 py-1.5 dark:bg-gray-900 bg-[#F8F8FB] rounded-md inline-flex justify-start items-start gap-2.5 hover:cursor-pointer hover:opacity-85`}>
                        <div id="large-size" className="justify-start text-zinc-400 dark:hover:text-white text-sm font-medium font-['Gordita'] leading-tight"
                            onClick={() => handleSizeChoosen("large-size", "large")}
                        >Large</div>
                    </div>
                </div>
            </div>
            <div className="w-px h-40 bg-gray-900 dark:bg-zinc-100 hidden md:block"></div>
            <div className="w-full h-0.5 dark:bg-zinc-100 bg-[#D2D1D6] md:hidden my-10"></div>
            <div className="w-full md:w-[30%]">
                <div className="dark:text-white text-[var(--bg-dark-mode-primary)] text-xl font-medium font-['Gordita'] leading-loose">Brand</div>
                <div className="px-4 py-2.5 rounded-md outline-1 outline-offset-[-1px] outline-zinc-300 flex my-5 items-center">
                    <input type="text" className="w-11/12 h-full outline-0 dark:text-white text-zinc-400 pr-4" placeholder="Search branch name"
                        onChange={handleChange} />
                    <Image src={`/images/icons/filter/search.svg`} className="w-6 h-6 hidden dark:block" height={"0"} width={"0"} alt="" />
                    <Image src={`/images/icons/filter/ligh-mode/Search.svg`} className="w-6 h-6 dark:hidden" height={"0"} width={"0"} alt="" />

                </div>
                <div className="flex justify-evenly">
                    <div className="px-3 py-1.5 dark:bg-gray-900 bg-[#F8F8FB] rounded-md inline-flex justify-start items-start gap-2.5 
                    hover:cursor-pointer hover:opacity-85">
                        <div id="lavazza-branch" className={`justify-start text-zinc-400 dark:hover:text-white 
                        text-sm font-medium font-['Gordita'] leading-tight`}
                            onClick={() => handleBranchChoosen("lavazza-branch", "lavazza")}>Lavazza</div>
                    </div>
                    <div className="px-3 py-1.5 dark:bg-gray-900 bg-[#F8F8FB]  rounded-md inline-flex justify-start items-start gap-2.5
                                    hover:cursor-pointer hover:opacity-85">
                        <div id="nescafe-branch" className={`justify-start text-zinc-400 dark:hover:text-white text-sm 
                                font-medium font-['Gordita'] leading-tight `}
                            onClick={() => handleBranchChoosen("nescafe-branch", "nescafe")}>Nescafe</div>
                    </div>
                    <div className="px-3 py-1.5 dark:bg-gray-900 bg-[#F8F8FB]  rounded-md inline-flex justify-start items-start gap-2.5 
                                     hover:cursor-pointer hover:opacity-85">
                        <div id="starbucks-branch" className={`justify-start text-zinc-400 dark:hover:text-white text-sm 
                                font-medium font-['Gordita'] leading-tight `}
                            onClick={() => handleBranchChoosen("starbucks-branch", "starbucks")}
                        >Starbucks</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-end mt-5">
            <div className="text-zinc-400 text-base font-normal font-['Gordita'] leading-snug mr-5 dark:hover:text-white hover:text-black hover:cursor-pointer"
                onClick={handleCloseFilterTool}
            >Cancel</div>
            <div className="px-2.5 py-2 bg-yellow-500 rounded-md inline-flex  items-start gap-2.5 hover:cursor-pointer hover:opacity-90">
                <button type="submit" className=" text-gray-900 text-base dark:font-medium font-semibold font-['Gordita'] leading-snug">Show Result</button>
            </div>
        </div>
    </form>);
}

export default FilterTooltip;