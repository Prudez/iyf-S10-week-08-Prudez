import { useState } from 'react';

function CreatePost({ setPosts }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            title,
            excerpt: content,
            author: "You",
            date: new Date().toLocaleDateString()
        };

        setPosts(prev => [newPost, ...prev]);

        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />

            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write post..."
            />

            <button type="submit">Create Post</button>
        </form>
    );
}

export default CreatePost;