import React, { useContext, useEffect } from 'react'
import { getPosts } from '../services/apiForum'
import { Link } from 'react-router-dom';
import { PostsContext } from '../context/MultiLevelContext';

export default function PostList() {

    const [postListData, setPostListData] = useContext(PostsContext)

    useEffect(() => {
        async function fetchPostList() {
            const data = await getPosts()
            setPostListData(data)
            console.log(data)
        }
        if(!postListData) fetchPostList()
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
