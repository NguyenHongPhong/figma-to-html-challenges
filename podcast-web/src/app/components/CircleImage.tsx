import type { CircleImage } from "../types";

function CircleImage(props: CircleImage) {
    const { src, translateX, leftPosition, children } = props;

    return (
        <div className={`w-12 md:w-10 h-12 md:h-10 rounded-full border-3 border-white ${translateX && `${translateX}`}`}>
            <div className={`w-full h-full rounded-full ${children && 'relative'}`}
                style={{
                    backgroundImage: `url(${src})`, backgroundSize: "cover",
                    backgroundPosition: `${leftPosition} center`,
                }}>
                {children && <span className="absolute left-1/2 -translate-x-1/2 text-center text-white text-sm
                font-semibold font-['Plus_Jakarta_Sans'] leading-3 top-1/2 -translate-y-1/2
                md:text-[8px]
                ">{children}</span>}
            </div>
        </div>
    )
}

export default CircleImage; 