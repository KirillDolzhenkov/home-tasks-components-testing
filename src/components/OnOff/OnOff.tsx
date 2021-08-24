import React from "react";

type OnOffType = {
    on: boolean
    setOnOff: (value: boolean) => void
}

const OnOff: React.FC<OnOffType> = (props) => {
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }
    
    return (
        <div>
            <div onClick={()=>{props.setOnOff(true)}} style={onStyle}>On</div>
            <div onClick={()=>{props.setOnOff(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export {
    OnOff
}