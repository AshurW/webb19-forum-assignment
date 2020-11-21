import React, { useState, useEffect } from 'react'
import { getPosts } from '../services/apiForum'

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
        <div>
            {postListData && postListData.map(postData => {
                return (
                    <p key={postData.id}>{postData.title}</p>
                )
            })}
        </div>
    )
}
