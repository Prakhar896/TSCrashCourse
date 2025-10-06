import { useContext, useState } from "react";
import { User, UserContext, UserProvider } from "./UserContextProvider";

export const Person = (props: User) => {
    // const [isShowInfo, setShowInfo] = useState<boolean | null>(false);
    // const [bio, setBio] = useState<string | null>('');

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setBio(event.target.value);
    // }

    const { users, addUser } = useContext(UserContext);

    return (
        <UserProvider>
            <div>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Married: {props.isMarried ? "Yes" : "No"}</p>
                {/* 
            <p>{props.name} Bio: {bio ?? "No Bio Available"}</p>
            <input value={bio ?? ''} onChange={e => setBio(e.target.value)} /> */}
            </div>
        </UserProvider>
    )
}