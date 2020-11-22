import React, { useContext, useEffect } from 'react'
import { getPosts } from '../../services/apiForum'
import { PostsContext } from '../../context/MultiLevelContext';
import PostCard from './PostCard';

export default function PostList() {

    const [postListData, setPostListData] = useContext(PostsContext)

    useEffect(() => {
        async function fetchPostList() {
            const data = await getPosts()
            setPostListData(data)
            console.log(data)
        }
        if (!postListData) fetchPostList()
    }, [])

    return (
        <div className='mt-3'>
            {postListData && postListData.map(postData => {
                return (
                    <PostCard key={postData.id} postData={postData} />
                )       
            })}
        </div>
    )
}
