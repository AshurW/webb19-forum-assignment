import React from 'react'
import PostList from '../components/PostList'
import { Link } from 'react-router-dom';

export default function PostListPage() {
    return (
        <div>
            <h1>Forum</h1>
            <Link to='/posts/create'><button className="btn btn-primary">Create Post</button></Link>
            <PostList />
        </div>
    )
}
