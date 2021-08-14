import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsedValue: (value: boolean) => void
}

type AccordionBodyPropsType = {}

export const Accordion = (props: AccordionPropsType) => {
    let [collapsed, setCollapsedValue] = useState(false)
    return (
        <>
            <AccordionTitle
                title={props.titleValue}
                setCollapsedValue={setCollapsedValue}
                collapsed={collapsed}
            />
        </>
    )
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    let onClickHandler = () => props.setCollapsedValue(!props.collapsed)
    return (
        <div>
            <h3 onClick={onClickHandler}>{props.title}</h3>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <div>
            <div>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </div>
        </div>
    )
}