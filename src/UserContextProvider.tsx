import { createContext, useEffect, useState } from "react";

export interface User {
    name: string;
    age: number;
    isMarried: boolean;
}

export interface UserContextType {
    users: User[] | null;
    addUser: (user: User) => void;
    updateUser: (userID: string) => void;
    deleteUser: (userID: string) => void;
}

const contextInitialValues = {
    users: null,
    addUser: (user: User) => { },
    updateUser: (userID: string) => { },
    deleteUser: (userID: string) => { },
}

export const UserContext = createContext<UserContextType>(contextInitialValues);

interface Props {
    children: React.ReactNode;
}

export const UserProvider = (props: Props) => {
    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(() => {
        setUsers([
            { name: "Pedro", age: 30, isMarried: true },
            { name: "John", age: 40, isMarried: false },
            { name: "Jane", age: 50, isMarried: true },
        ])
    }, [])

    const addUser = (user: User) => null;
    const updateUser = (userID: string) => null;
    const deleteUser = (userID: string) => null;

    return <UserContext.Provider value={{users, addUser, updateUser, deleteUser}}>{props.children}</UserContext.Provider>;
}