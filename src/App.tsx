import React from 'react';
import './App.css'
import { Person } from './Person';

let name: string = "Pedro";
let age: number = 30;
let isMarried: boolean = true;

let ages: number[] = [30, 40, 50];
let person: any = 3;


function App() {
    return (
        <div>
            <Person name={"Pedro"} age={22} isMarried={false} />
            <Person name={"John"} age={32} isMarried={true} />
        </div>
    );
}

export default App;