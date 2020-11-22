import styled from 'styled-components';

export const PostCardDiv = styled.div `
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1.2rem;
    /* background-color: #282b34; */
    background-color: ${props => (props.pinned ? '#444959' : '#282b34')};
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