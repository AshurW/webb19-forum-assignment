import React from 'react'
import { StyledErrorDiv } from './InfoBoxStyle'


export default function ErrorMessage(props) {
    return (
        <StyledErrorDiv>
            {props.message}
        </StyledErrorDiv>
    )
}
