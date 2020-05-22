import React from "react";

type PropsType = {
    increment: () => void
    reset: () => void
    count: number
}

function Button(props: PropsType) {
    return (
        <div className="container">
            <button className="button" onClick={props.increment}>INC</button>
            <button className={props.count>=1 ? "button": "reset"} onClick={props.reset}>RESET</button>
        </div>
    )
}

export default Button