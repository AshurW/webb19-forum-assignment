import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { PostDetailContext } from '../../context/MultiLevelContext';
import { getPost } from '../../services/apiForum';

export default function Post() {

    const { postId } = useParams()
    const [postDetailData, setPostDetailData] = useContext(PostDetailContext)

    useEffect(() => {
        async function fetchPostDetail () {
            const data = await getPost(postId)
            setPostDetailData(data)
        }
        if(!postDetailData) fetchPostDetail()
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
