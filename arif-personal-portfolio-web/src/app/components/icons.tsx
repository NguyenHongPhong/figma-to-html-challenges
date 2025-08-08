import React from 'react';
const Circle = function () {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <svg
                width="77"
                height="77"
                viewBox="0 0 77 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <clipPath id="bgblur_0_7_192_clip_path" clipPathUnits="userSpaceOnUse">
                        <circle cx="38.5" cy="38.5" r="38.5" />
                    </clipPath>
                </defs>

                <foreignObject x="-24" y="-24" width="125" height="125">
                    <div
                        style={{
                            backdropFilter: 'blur(12px)',
                            clipPath: 'url(#bgblur_0_7_192_clip_path)',
                            height: '100%',
                            width: '100%',
                        }}
                    />
                </foreignObject>

                <circle
                    data-figma-bg-blur-radius="24"
                    cx="38.5"
                    cy="38.5"
                    r="38.5"
                    fill="white"
                    fillOpacity="0.7"
                />

                <path
                    d="M44.7059 39.33C44.6471 39.3904 44.4251 39.6484 44.2183 39.8607C43.006 41.1957 39.8433 43.3808 38.188 44.0478C37.9366 44.155 37.301 44.3818 36.9614 44.3964C36.636 44.3964 36.3258 44.3215 36.0298 44.1696C35.6609 43.9573 35.3649 43.6233 35.2027 43.2289C35.0983 42.9553 34.9361 42.1363 34.9361 42.1218C34.7739 41.2259 34.6847 39.7702 34.6847 38.1615C34.6847 36.6288 34.7739 35.2324 34.9067 34.3229C34.9219 34.3084 35.0841 33.2907 35.2615 32.9421C35.5869 32.3053 36.2224 31.9099 36.9026 31.9099H36.9614C37.4044 31.9255 38.336 32.3209 38.336 32.3355C39.9021 33.0035 42.9918 35.0815 44.2335 36.4623C44.2335 36.4623 44.5833 36.8171 44.7353 37.0387C44.9725 37.3571 45.0901 37.7515 45.0901 38.1459C45.0901 38.586 44.9573 38.996 44.7059 39.33Z"
                    fill="#5D3BEE"
                />
            </svg>
        </div>
    )
}

const Dots = function () {
    return (
        <div>
            <svg width="144" height="20" viewBox="0 0 144 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.2" cx="39" cy="10" r="8" fill="#080415" />
                <circle opacity="0.2" cx="8" cy="10" r="8" fill="#080415" />
                <circle cx="72" cy="10" r="9.5" stroke="#5D3BEE" />
                <circle cx="72" cy="10" r="6" fill="#5D3BEE" />
                <circle opacity="0.2" cx="105" cy="10" r="8" fill="#080415" />
                <circle opacity="0.2" cx="136" cy="10" r="8" fill="#080415" />
            </svg>
        </div>
    )
};


const RetangleRight = function () {
    return (<div className="absolute right-0 bottom-0">
        <svg className='w-20 h-12 md:w-[150px] md:h-[150px]' viewBox="0 0 83 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.05">
                <rect width="16.0863" height="9.37215" rx="4.68607" transform="matrix(0.693903 -0.720068 0.694182 0.7198 60.2 18.0034)" fill="#5D3BEE" />
                <rect width="42.5174" height="9.37215" rx="4.68607" transform="matrix(0.693903 -0.720068 0.694182 0.7198 28.0039 52.1016)" fill="#5D3BEE" />
                <rect width="106.961" height="9.37215" rx="4.68607" transform="matrix(0.693902 -0.720069 0.694181 0.7198 17.053 86.1182)" fill="#5D3BEE" />
                <rect width="39.8825" height="9.37215" rx="4.68607" transform="matrix(0.693906 -0.720065 0.694185 0.719796 61.7827 61.0674)" fill="#5D3BEE" />
            </g>
        </svg>
    </div>)
}

const RetangleLeft = function () {
    return (<div className="absolute left-0 bottom-0">
        <svg className='w-20 h-12 md:w-[150px] md:h-[150px]' viewBox="0 0 66 57" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g opacity="0.05">
                <rect width="16.0863" height="9.37215" rx="4.68607" transform="matrix(0.693903 -0.720068 0.694182 0.7198 13.4508 17.9209)" fill="#5D3BEE" />
                <rect width="42.5174" height="9.37215" rx="4.68607" transform="matrix(0.693905 -0.720067 0.694183 0.719798 -18.7455 52.0186)" fill="#5D3BEE" />
                <rect width="106.961" height="9.37215" rx="4.68607" transform="matrix(0.693903 -0.720068 0.694182 0.7198 -29.696 86.0356)" fill="#5D3BEE" />
                <rect width="39.8825" height="9.37215" rx="4.68607" transform="matrix(0.693902 -0.72007 0.69418 0.719801 15.0334 60.9849)" fill="#5D3BEE" />
            </g>
        </ svg>
    </div>)
}



const CircleIconWrapper = ({
    color,
    children
}: { color: string, children: React.JSX.Element }) => {
    return (
        <svg
            width={33}
            height={33}
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
                opacity="0.2"
                cx="16.5"
                cy="16.5"
                r="15.5"
                stroke={color}
                strokeWidth={2}
            />
            {children}
        </svg>
    );
};

const SectionBackground = function () {
    return (<div className='absolute top-0 '>
        <svg width="390" height="386" viewBox="0 0 390 386" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.05">
                <rect width="96.9656" height="58.8106" rx="29.4053" transform="matrix(0.673627 -0.767464 0.647349 0.736955 181.788 4.79053)" fill="#5D3BEE" />
                <rect width="256.288" height="58.8106" rx="29.4053" transform="matrix(0.673627 -0.767464 0.647349 0.736955 -6.6156 223.857)" fill="#5D3BEE" />
                <rect width="644.741" height="58.8106" rx="29.4053" transform="matrix(0.673627 -0.767464 0.647349 0.736955 -70.6973 442.397)" fill="#5D3BEE" />
                <rect width="240.406" height="58.8106" rx="29.4053" transform="matrix(0.673627 -0.767464 0.647349 0.736955 191.051 281.459)" fill="#5D3BEE" />
            </g>
        </svg>
    </div>)
}

const SectionBackground2 = function () {
    return (<div className='absolute bottom-0 left-0 hidden md:block'>
        <svg width="266" height="229" viewBox="0 0 266 229" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.05">
                <rect width="66.1188" height="38.5219" rx="19.261" transform="matrix(0.693904 -0.720067 0.694183 0.719799 52.2851 72.1602)" fill="#5D3BEE" />
                <rect width="174.757" height="38.5219" rx="19.261" transform="matrix(0.693904 -0.720068 0.694182 0.719799 -80.0508 212.311)" fill="#5D3BEE" />
                <rect width="439.635" height="38.5219" rx="19.261" transform="matrix(0.693903 -0.720069 0.694181 0.7198 -125.059 352.128)" fill="#5D3BEE" />
                <rect width="163.927" height="38.5219" rx="19.261" transform="matrix(0.693903 -0.720069 0.694182 0.7198 58.7929 249.163)" fill="#5D3BEE" />
            </g>
        </svg>
    </div>)
}

const SectionBackground3 = function () {
    return (
        <div className='absolute right-0 top-0 hidden md:block'>
            <svg width="309" height="276" viewBox="0 0 309 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.05">
                    <rect width="174.757" height="38.5219" rx="19.261" transform="matrix(0.693904 -0.720068 0.694182 0.719799 111.949 103.311)" fill="#5D3BEE" />
                    <rect width="439.635" height="38.5219" rx="19.261" transform="matrix(0.693903 -0.720069 0.694181 0.7198 66.9413 243.128)" fill="#5D3BEE" />
                    <rect width="163.927" height="38.5219" rx="19.261" transform="matrix(0.693903 -0.720069 0.694182 0.7198 250.793 140.163)" fill="#5D3BEE" />
                </g>
            </svg>
        </div>
    )
}
const LayerBackground = function () {
    return (<div className='hidden md:block absolute right-0 bottom-0'>
        <svg width="382" height="205" viewBox="0 0 382 205" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
                <rect width="57.1118" height="33.2743" rx="16.6372" transform="matrix(0.578224 -0.815878 0.794162 0.607706 204.73 79.4164)" fill="#5D3BEE" />
                <rect width="150.951" height="33.2743" rx="16.6372" transform="matrix(0.578224 -0.815878 0.794162 0.607706 109.844 216.23)" fill="#5D3BEE" />
                <rect width="379.747" height="33.2743" rx="16.6372" transform="matrix(0.578224 -0.815878 0.794162 0.607706 89.4918 341.463)" fill="#5D3BEE" />
                <rect width="141.597" height="33.2743" rx="16.6372" transform="matrix(0.578224 -0.815878 0.794162 0.607706 233.186 229.74)" fill="#5D3BEE" />
            </g>
        </svg>
    </div>)
}


export {
    Circle, Dots, RetangleRight, RetangleLeft, CircleIconWrapper, SectionBackground, LayerBackground, SectionBackground2, SectionBackground3
}