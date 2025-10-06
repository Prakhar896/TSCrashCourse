import React from 'react';
import './App.css'
import { Countries, Person } from './Person';

function App() {
    return (
        <div>
            <Person name={"Pedro"} age={22} isMarried={false} country={Countries.India} />
        </div>
    );
}

export default App;