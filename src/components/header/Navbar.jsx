import React from 'react'
import { Link } from 'react-router-dom';
import { StyledLi, StyledNavbar, StyledUl } from './NavBarStyle';

export default function Navbar() {
    return (
        <StyledNavbar>
            <StyledUl>
                <StyledLi>
                    <Link to='/'>Home</Link>
                </StyledLi>
                <StyledLi>
                    <Link to='/posts'>Forum</Link>
                </StyledLi>
            </StyledUl>
            <StyledUl>
                <StyledLi>
                    <Link to='/login'>Login</Link>
                </StyledLi>
                <StyledLi>
                    <Link to='/register'>Register</Link>
                </StyledLi>
            </StyledUl>
        </StyledNavbar>
    )
}
