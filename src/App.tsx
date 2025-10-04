import React from 'react';
import './App.css'
import MyButton from './components/mybutton';

function App() {
    return (
        <MyButton style={{
            backgroundColor: 'blue',
            fontSize: 16,
            textColor: 'blue'
        }} />
    );
}

export default App;
