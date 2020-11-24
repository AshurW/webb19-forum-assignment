import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../context/MultiLevelContext';
import { StyledLi, StyledNavbar, StyledUl } from './NavBarStyle';
import { getCurrentUserInfo } from '../../services/apiAuth'

export default function Navbar() {

    const history = useHistory()
    const {currentUserData, setCurrentUserData} = useContext(UserContext)

    function logoutUser() {
        setCurrentUserData(null)
        localStorage.removeItem('loginToken')
        history.push('/')
    }

    useEffect(() => {
        async function fetchCurrentUser () {
            const res = await getCurrentUserInfo()
            setCurrentUserData(res)
        }
        if(!currentUserData && localStorage.getItem('loginToken')) {
            fetchCurrentUser()
        } 
    }, [])

    return (
        <StyledNavbar>
            <StyledUl>
                <StyledLi>
                    <Link to='/'>Home</Link>
                </StyledLi>
                {currentUserData &&
                    <StyledLi>
                        <Link to='/posts'>Posts</Link>
                    </StyledLi>
                }
            </StyledUl>
            {currentUserData ? (
                    <StyledUl>
                        <StyledLi>
                            {currentUserData.firstName}
                        </StyledLi>
                        <StyledLi>
                            <a href='#' onClick={logoutUser}>Logout</a>
                        </StyledLi>
                    </StyledUl>
                ) : (
                    <StyledUl>
                        <StyledLi>
                            <Link to='/login'>Login</Link>
                        </StyledLi>
                        <StyledLi>
                            <Link to='/register'>Register</Link>
                        </StyledLi>
                    </StyledUl>
                )
            }
        </StyledNavbar>
    )
}
