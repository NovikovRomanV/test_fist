import React from "react";

type PropsType = {
    increment: () => void
    reset: () => void
    count: number
}

function Button(props: PropsType) {
    return (
        <div className="conteiner">
            <button className="inc" onClick={props.increment}>INC</button>
            <button className={props.count>=1 ? "": "reset"} onClick={props.reset}>RESET</button>
        </div>
    )
}

export default Button