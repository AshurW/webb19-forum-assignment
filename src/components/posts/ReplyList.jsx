import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { ReplyContext, PostDetailContext } from '../../context/MultiLevelContext';
import { getReplies } from '../../services/apiForum';
import ReplyCard from './ReplyCard';

export default function ReplyList() {

    const { postId } = useParams()
    const [replyListData, setReplyListData] = useContext(ReplyContext)
    const [postDetailData] = useContext(PostDetailContext)

    useEffect(() => {
        async function fetchReplyList() {
            const data = await getReplies(postId)
            setReplyListData(data)
        }
        if(!replyListData || postDetailData !== postId) {
            fetchReplyList()
        }
    }, [])

    return (
        <div>
            <h3>Replies</h3>
            {(postDetailData && !postDetailData.isClosed) ? (
                <Link to={`/posts/${postId}/reply`}><button className="btn btn-primary">Add Reply</button></Link>
            ): (
                <p>Replies for this post is closed</p>
            )}
            {replyListData && replyListData.map(reply => {
                return (
                    <ReplyCard key={reply.id} reply={reply} />
                )
            })}
        </div>
    )
}
