import React from 'react'

type ButtonProps = {
    style: {
        backgroundColor: string;
        fontSize: number;
        textColor: string;
    }
}

function MyButton({ style }: ButtonProps) {
    return (
        <button style={style}>My Button</button>
    )
}

export default MyButton