import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getPost } from '../services/apiForum';

export default function Post() {

    const [postDetailData, setPostDetailData] = useState(null)
    const { postId } = useParams()

    useEffect(() => {
        async function fetchPostDetail () {
            const data = await getPost(postId)
            setPostDetailData(data)
            console.log(data)
        }
        fetchPostDetail()
    }, [])

    return (
        <div>
            {postDetailData && (
                <>
                    <h1>{postDetailData.title}</h1>
                    <p>{postDetailData.content}</p>
                </>
            )}
        </div>
    )
}
