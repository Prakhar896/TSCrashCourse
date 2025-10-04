import React from 'react'

type Color = "red" | "blue" | "orange"

type ButtonProps = {
    backgroundColour: Color,
    fontSize?: number,
    padding: [number, number, number, number]
}

function MyButton(
    { backgroundColour, fontSize=40, padding }:
    ButtonProps
) {
    return (
        <div style={{ backgroundColor: backgroundColour, fontSize: fontSize, padding: padding.join('px ') + 'px' }}>
            <button>My Button</button>
        </div>
    )
}

export default MyButton