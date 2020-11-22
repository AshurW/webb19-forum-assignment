import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ReplyContext } from '../context/MultiLevelContext';
import { getReplies } from '../services/apiForum';

export default function ReplyList() {

    const { postId } = useParams()
    const [replyListData, setReplyListData] = useContext(ReplyContext)

    useEffect(() => {
        async function fetchReplyList() {
            const data = await getReplies(postId)
            setReplyListData(data)
        }
        if(!replyListData) fetchReplyList()
    }, [])

    return (
        <div>
            <h3>Replies</h3>
            {replyListData && replyListData.map(reply => {
                return (
                    <div key={reply.id}>
                        <p>Title: {reply.title}</p>
                        <p>Author: {reply.author && reply.author.firstName}</p>
                        <p>Content: {reply.content}</p>
                    </div>
                )
            })}
        </div>
    )
}
