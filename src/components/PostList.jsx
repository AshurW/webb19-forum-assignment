import React, { useState, useEffect } from 'react'
import { getPosts } from '../services/apiForum'
import { Link } from 'react-router-dom';

export default function PostList() {

    const [postListData, setPostListData] = useState(null)

    useEffect(() => {
        async function fetchPostList() {
            const data = await getPosts()
            setPostListData(data)
        }
        fetchPostList()
    }, [])

    return (
        <div className='mt-3'>
            {postListData && postListData.map(postData => {
                return (
                    
                        <p key={postData.id}><Link to={`/posts/${postData.id}`} >{postData.title}</Link></p>
                    
                )
            })}
        </div>
    )
}
