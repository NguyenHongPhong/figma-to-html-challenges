import type { Heart } from "@/app/types";
import Image from "next/image";
function Heart(props: Heart) {
    const { index, isHearted, onChange } = props;
    return (
        <>
            {!isHearted && <Image src={`/images/icons/products/Heart.svg`} height={"0"} width={"0"}
                className="w-6 h-6 dark:hidden" alt="heart-icon" onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onChange(index);
                }}
            />}
            {!isHearted && <Image src={`/images/icons/products/Heart-dark-mode.svg`} height={"0"} width={"0"}
                className="w-6 h-6 hidden dark:block" alt="heart-icon-dark-mode" onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onChange(index);
                }}
            />}
            {isHearted && <Image src={`/images/icons/products/Hearted.svg`} height={"0"} width={"0"}
                className="w-6 h-6" alt="hearted-icon" onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onChange(index);
                }}
            />}
        </>
    )
}

export default Heart;