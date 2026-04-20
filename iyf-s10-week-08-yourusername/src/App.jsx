import { useState } from 'react';
import './App.css';

function App() {
    const name = "Your Name Here";
    const currentDate = new Date().toLocaleDateString();
    const hour = new Date().getHours();

    const isMorning = hour < 12;
    const isAfternoon = hour >= 12 && hour < 18;

    return (
        <div>
            <h1>Hello, I'm {name}</h1>

            <p>I am learning React and building my first app.</p>
            <p>I enjoy coding and solving problems.</p>
            <p>This is my Week 8 React project.</p>

            <p>Today's date is: {currentDate}</p>

            {isMorning && <p>Good morning ☀️</p>}
            {isAfternoon && <p>Good afternoon 🌤️</p>}
            {!isMorning && !isAfternoon && <p>Good evening 🌙</p>}
        </div>
    );
}

export default App;