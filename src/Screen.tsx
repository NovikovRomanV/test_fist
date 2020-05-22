import React from "react";

type PropsType = {
    count: number
}

function Screen(props: PropsType) {
    return (
        <span className={props.count === 5 ? "screen_number" : "screen"}>{props.count}</span>
    )
}

export default Screen