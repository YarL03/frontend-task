import { FC } from "react"

const Loader: FC = () => {

    return (
        <div>
            <svg style={{margin: 'auto', background: 'transparent', display: 'block', shapeRendering: 'auto'}} width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#93dbe9" stroke="none">
                <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
                </path>
            </svg>
        </div>
    )
}

export default Loader