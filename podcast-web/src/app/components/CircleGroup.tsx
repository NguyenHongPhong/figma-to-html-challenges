import { ParentStateProps } from "../types";

function CircleGroup(props: ParentStateProps) {
    const { activeIndex, onChange } = props;
    const circles = [{
        cx: "6"
    },
    { cx: "28" },
    { cx: "48" }
    ];

    const getRadius = (indexSelected: number) => {
        return indexSelected === activeIndex ? "6" : "4";
    }

    const fillColor = (indexSelected: number) => {
        return indexSelected === activeIndex ? "#936CDD" : "#D8D5DE";
    };

    return (
        <svg className="hover:cursor-pointer" width="55" height="12" viewBox="0 0 52 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            {circles.map((circle, index) => (
                <circle key={index} cx={circle.cx} cy="6" r={getRadius(index)} fill={fillColor(index)}
                    tabIndex={-1}
                    onClick={
                        (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onChange(index);
                        }} />
            ))}

        </svg>

    )
}

export default CircleGroup;