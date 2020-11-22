import styled from 'styled-components';

export const StyledNavbar = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #333;
`

export const StyledUl = styled.ul `
    display: flex;
    flex-direction: row;
    margin-right: 2rem;
    list-style: none;
    font-size: 1.2rem;
    margin-top: 0.5rem;
`

export const StyledLi = styled.li `
    margin-right: 1.5rem;
    a {
        text-decoration: none;
        padding: 4px;
        color: whitesmoke
    }
    a:hover {
        color: grey;
    }
`