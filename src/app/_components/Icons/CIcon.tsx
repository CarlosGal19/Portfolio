export default function CIcon({ fill = "FFFFFF", width= 48, height = 48 }: { fill?: string; width?: number; height?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 16 16"
        >
            <path
                fill={fill}
                d="M5.464 4.464a5 5 0 1 0 7.072 7.072l2.12 2.12a8 8 0 1 1 0-11.313l-2.12 2.121a5 5 0 0 0-7.072 0Z"
            />
        </svg>
    )
}
