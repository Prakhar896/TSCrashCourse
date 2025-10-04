import React from 'react'

type ButtonProps = {
    style: React.CSSProperties;
}

function MyButton({ style }: ButtonProps) {
    return (
        <button style={style}>My Button</button>
    )
}

export default MyButton