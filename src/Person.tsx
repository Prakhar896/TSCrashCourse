import { useState } from "react";

export interface PersonProps {
    name: string;
    age: number;
    isMarried: boolean;
}

export const Person = (props: PersonProps) => {
    const [isShowInfo, setShowInfo] = useState<boolean | null>(false);

    return (
        <div>
            {isShowInfo && <>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Married: {props.isMarried ? "Yes" : "No"}</p>
            </>}
        </div>
    )
}