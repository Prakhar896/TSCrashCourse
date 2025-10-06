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
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Married: {props.isMarried ? "Yes" : "No"}</p>
            <p>Country of Origin: {props.country}</p>
        </div>
    )
}