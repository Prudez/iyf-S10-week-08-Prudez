import { useState } from 'react';
import './App.css';

import Layout from './components/Layout';
import PostCard from './components/PostCard';
import Greeting from './components/Greeting';
import Button from './components/Button';
import Card from './components/Card';
import UserGreeting from './components/UserGreeting';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import UserForm from './components/UserForm';
import EventExamples from './components/EventExamples';
import ContactForm from './components/ContactForm';
import TodoList from './components/TodoList';

// NEW (mini-project components)
import PostList from './components/Post/PostList';
import CreatePost from './components/Post/CreatePost';

function App() {
    const name = "Your Name Here";
    const currentDate = new Date().toLocaleDateString();
    const hour = new Date().getHours();

    const isMorning = hour < 12;
    const isAfternoon = hour >= 12 && hour < 18;

    const user = { name: "Alice" }; // change to null to test login condition

    // 🔥 CHANGED: posts are now state (IMPORTANT)
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "First Post",
            excerpt: "Hello CommunityHub!",
            author: "Alice",
            date: "Jan 15"
        },
        {
            id: 2,
            title: "Second Post",
            excerpt: "Learning React is fun!",
            author: "Bob",
            date: "Jan 14"
        }
    ]);

    return (
        <Layout>

            {/* User */}
            <UserGreeting user={user} />

            {/* Greetings */}
            <Greeting name="Alice" />
            <Greeting name="Bob" />
            <Greeting name="Charlie" />

            {/* Personal info */}
            <h1>Hello, I'm {name}</h1>

            <p>I am learning React and building my first app.</p>
            <p>I enjoy coding and solving problems.</p>
            <p>This is my Week 8 React project.</p>

            <p>Today's date is: {currentDate}</p>

            {isMorning && <p>Good morning ☀️</p>}
            {isAfternoon && <p>Good afternoon 🌤️</p>}
            {!isMorning && !isAfternoon && <p>Good evening 🌙</p>}

            {/* Card */}
            <Card title="About Me">
                <p>This section uses the children prop 🎯</p>
                <Button text="Click me" />
            </Card>

            {/* 🔥 NEW: Create Post form */}
            <CreatePost setPosts={setPosts} />

            {/* 🔥 NEW: Post List (dynamic state) */}
            <main>
                <h2>Welcome to CommunityHub</h2>

                <PostList posts={posts} />
            </main>

            {/* State components */}
            <Counter />
            <Toggle />
            <UserForm />
            <EventExamples />
            <ContactForm />
            <TodoList />

            {/* Buttons */}
            <Button text="Submit" variant="primary" />
            <Button text="Cancel" variant="secondary" />
            <Button text="Delete" variant="danger" />
            <Button />

        </Layout>
    );
}

export default App;