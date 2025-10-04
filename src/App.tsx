import React from 'react';
import './App.css'
import MyButton from './components/mybutton';

function App() {
    return (
        <MyButton backgroundColour='orange' fontSize={40} padding={[10, 10, 10, 10]} />
    );
}

export default App;
