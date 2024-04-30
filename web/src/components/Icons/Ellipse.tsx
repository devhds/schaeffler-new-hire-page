const Ellipse = ({ currentVideoTime }: { currentVideoTime: number }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <circle
                r="20"
                cx="21"
                cy="21"
                fill="transparent"
                stroke="#FFFFFF"
                strokeDasharray="125.6"
                strokeDashoffset={currentVideoTime}
            ></circle>
        </svg>
    )
}

export default Ellipse
