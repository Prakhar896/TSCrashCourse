import React from 'react';
import './App.css'
import MyButton from './components/mybutton';

function App() {
    return (
        <MyButton style={{
            backgroundColor: 'blue',
            fontSize: 16,
            color: 'blue',
            padding: '10px',
            borderRadius: '10px'
        }} />
    );
}

export default App;
