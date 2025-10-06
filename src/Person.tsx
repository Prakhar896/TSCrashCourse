import { useState } from "react";

export interface PersonProps {
    name: string;
    age: number;
    isMarried: boolean;
}

export const Person = (props: PersonProps) => {
    const [isShowInfo, setShowInfo] = useState<boolean | null>(false);
    const [bio, setBio] = useState<string | null>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBio(event.target.value);
    }

    return (
        <div>
            {isShowInfo && <>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Married: {props.isMarried ? "Yes" : "No"}</p>
            </>}

            <p>{props.name} Bio: {bio ?? "No Bio Available"}</p>
            <input value={bio ?? ''} onChange={e => setBio(e.target.value)} />
        </div>
    )
}