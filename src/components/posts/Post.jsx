import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { PostDetailContext } from '../../context/MultiLevelContext';
import { getPost } from '../../services/apiForum';
import { PostDiv } from './CardStyles';


export default function Post() {

    const { postId } = useParams()
    const [postDetailData, setPostDetailData] = useContext(PostDetailContext)

    useEffect(() => {
        async function fetchPostDetail () {
            const data = await getPost(postId)
            setPostDetailData(data)
        }
        if(!postDetailData || !postDetailData.id !== postId) {
            fetchPostDetail()
        }
    }, [])

    return (
        <PostDiv>
            {postDetailData && (
                <>
                    <h1>{postDetailData.title}</h1>
                    <p>{postDetailData.content}</p>
                </>
            )}
        </PostDiv>
    )
}
