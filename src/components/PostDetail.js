// PostDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostBySlug } from "../api/posts";
import '../PostDetail.css';

function PostDetail() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPostBySlug(slug);
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchData();
    }, [slug]);

    return (
        <div className="post-detail-container shadow rounded">
            {post ? (
                <>
                    <h2 className="post-title">{post.title}</h2>
                    {post.author && <p className="post-meta">By {post.author}</p>}
                    {post.created && <p className="post-meta">{post.created.slice(0, 10)}</p>}
                    <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PostDetail;
