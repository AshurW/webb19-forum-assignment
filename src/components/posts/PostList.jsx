import React, { useState, useContext, useEffect } from 'react'
import { getPosts, getNextPagePost } from '../../services/apiForum'
import { PostsContext, RefreshContent } from '../../context/MultiLevelContext';
import PostCard from './PostCard';

export default function PostList() {

    const [postListData, setPostListData] = useContext(PostsContext)
    const { refreshState, setRefreshState } = useContext(RefreshContent)
    const [pageLink, setPageLink] = useState(true)

    async function showMorePosts() {
        const { data, nextLink } = await getNextPagePost(pageLink)
        let tmpArray = postListData
        tmpArray.push(...data)
        setPostListData(tmpArray)
        setPageLink(nextLink)
    }

    useEffect(() => {
        async function fetchPostList() {
            const { data, nextLink } = await getPosts()
            setPostListData(data)
            setPageLink(nextLink)
            setRefreshState(false)
        }
        if (!postListData || refreshState) {
            fetchPostList()
        }
    }, [refreshState])

    return (
        <div className='mt-3'>
            {postListData && postListData.map(postData => {
                return (
                    <PostCard key={postData.id} postData={postData} />
                )
            })}
            {pageLink &&  (
                <button className="btn btn-primary" onClick={showMorePosts}>show more</button>
                )
            }
        </div>
    )
}
