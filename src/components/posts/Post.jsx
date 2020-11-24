import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { PostDetailContext } from '../../context/MultiLevelContext';
import { getPost } from '../../services/apiForum';
import { ContentCardDiv, PostDiv, } from './CardStyles';


export default function Post() {

    const { postId } = useParams()
    const [postDetailData, setPostDetailData] = useContext(PostDetailContext)

    function dateFormating(date) {
        return (new Date(Date.parse(date))).toString()
    }

    useEffect(() => {
        async function fetchPostDetail() {
            const data = await getPost(postId)
            setPostDetailData(data)
        }
        if (!postDetailData || !postDetailData.id !== postId) {
            setPostDetailData(null)
            fetchPostDetail()
        }
    }, [])

    return (
        <PostDiv>
            {postDetailData && (
                <>
                    <p>Created At: {dateFormating(postDetailData.createdAt)}</p>

                    <ContentCardDiv>

                        <h1>{postDetailData.title}</h1>
                        <p>{postDetailData.content}</p>
                    </ContentCardDiv>
                    <p>views: {postDetailData.viewCount}</p>
                </>
            )}
        </PostDiv>
    )
}
