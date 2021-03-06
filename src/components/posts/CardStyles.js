import styled from 'styled-components';

export const CardDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1.2rem;
    border: 3px solid #444;
    p {
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: whitesmoke
    }
    a:hover {
        color: grey;
    }
`

export const PostDiv = styled(CardDiv)`
    flex-direction: column;
`

export const PostCardDiv = styled(CardDiv)`
    background-color: ${props => (props.pinned ? '#444959' : '#282b34')};
`

export const ReplyCardDiv = styled(CardDiv)`
    flex-direction: column;
    h5 {
        text-decoration: underline;
    }
`

export const ContentCardDiv = styled(CardDiv)`
    flex-direction: column;
    h1 {
        text-decoration: underline;
    }

`