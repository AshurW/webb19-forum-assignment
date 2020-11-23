import React from 'react'
import { ReplyCardDiv } from './CardStyles'

export default function ReplyCard({reply}) {
    return (
        <ReplyCardDiv>
            <h5>{reply.title}</h5>
            <h6>{reply.content}</h6>
            <p>Author: {reply.author && reply.author.firstName}</p>
        </ReplyCardDiv>
    )
}
