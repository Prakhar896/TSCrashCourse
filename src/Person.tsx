export interface PersonProps {
    name: string;
    age: number;
    isMarried: boolean;
}

export const Person = (props: PersonProps) => {
    const fetchUser = () => {
        return { name: "Pedro", age: 22, isMarried: null }
    }

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Married: {props.isMarried ? "Yes" : "No"}</p>
        </div>
    )
}