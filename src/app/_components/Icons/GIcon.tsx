export default function GIcon({ fill = "FFFFFF", width= 48, height = 48 }: { fill?: string; width?: number; height?: number }) {
    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill={fill}
        >
            <path
                d="M12.536 4.464a5 5 0 1 0-1.036 7.868V10H9V7h5.5v6.855l-.575.45a8.001 8.001 0 1 1 .732-11.962l-2.121 2.121Z"
            />
        </svg>
    )

}
