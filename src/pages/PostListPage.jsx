import React from 'react'
import PostList from '../components/posts/PostList'
import { Link } from 'react-router-dom';

export default function PostListPage() {
    return (
        <div>
            <h1>Posts</h1>
            <Link to='/posts/create'><button className="btn btn-primary">Create Post</button></Link>
            <PostList />
        </div>
    )
}
