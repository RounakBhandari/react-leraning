import React from 'react'

export const ButtonC = (props) => {
    const {label, BgColor, textColor} = props;
    return (
    <button className={`${BgColor} ${textColor} px-3 py-1 rounded`}>{label}</button>
)
}
