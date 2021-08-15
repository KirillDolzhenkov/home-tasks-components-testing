import React from "react";

type OnOffType = {
    on: boolean
}

const OnOff: React.FC<OnOffType> = (props)=>{
    const onStyle ={
        width: "30px",
        height: "30px",
    }
    const offStyle = {
        width: "30px",
        height: "30px",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black"
    }
    return(
        <div>
            <div></div>
            <div></div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export {
    OnOff
}