import React, {useState, useEffect} from 'react';
import {fetchPosts} from '../api/posts';
import {Link} from 'react-router-dom';
import '../PostList.css';


function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postsData = await fetchPosts();
                setPosts(postsData);
            } catch (error) {
                // Handle error
            }
        };

        fetchData();
    }, []);

    return (
        <div className="post-list-container">
            <h1 className="post-list-title">Featured Blog Posts</h1>
            <div className="post-list">
                {posts.map((post) => (
                    <div key={post.id} className="post-card">
                        <h2 className="post-title">{post.title}</h2>
                        <div className="post-meta">
                            <span className="post-author">By {post.author}</span>
                            <span className="post-date">{post.created.slice(0, 10)}</span>
                        </div>
                        <p className="post-content">{post.content.slice(0, 150)}... <Link to={`/posts/${post.slug}`}>Read
                            More</Link></p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostList;
