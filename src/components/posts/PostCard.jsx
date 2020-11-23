import React from 'react'
import { Link } from 'react-router-dom';
import { PostCardDiv } from './CardStyles';

export default function PostCard({postData}) {

    return (
        <PostCardDiv pinned={postData.isPinned}>
            
            <p><span>{postData.isPinned ? '📌' : ''}</span><Link to={`/posts/${postData.id}`} >{postData.title}</Link></p>
            <p>{postData.viewCount}📺</p>
        </PostCardDiv>
    )
}
