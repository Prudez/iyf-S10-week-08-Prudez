function PostCard({ title, excerpt, author, date }) {
    return (
        <article className="post-card">
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <div>
                <span>By {author}</span> | <span>{date}</span>
            </div>
        </article>
    );
}

export default PostCard;