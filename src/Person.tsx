import { useContext, useState } from "react";
import { User, UserContext, UserProvider } from "./UserContextProvider";

interface Props {
    name: string;
    age: number;
    isMarried: boolean;
    country: Countries;
}

export enum Countries {
    Brazil = "Brazil",
    France = "France",
    India = "India",
    UnitedStates = "United States"
}

export const Person = (props: Props) => {
    // const [isShowInfo, setShowInfo] = useState<boolean | null>(false);
    // const [bio, setBio] = useState<string | null>('');

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setBio(event.target.value);
    // }

    // const { users, addUser } = useContext(UserContext);

    return (
        <UserProvider>
            <div>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Married: {props.isMarried ? "Yes" : "No"}</p>
                <p>Country of Origin: {props.country}</p>
                {/* 
            <p>{props.name} Bio: {bio ?? "No Bio Available"}</p>
            <input value={bio ?? ''} onChange={e => setBio(e.target.value)} /> */}
            </div>
        </UserProvider>
    )
}