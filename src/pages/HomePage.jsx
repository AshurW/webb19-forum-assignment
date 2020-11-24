import React, {useContext, useEffect} from 'react'
import { UserContext } from '../context/MultiLevelContext'
import { getCurrentUserInfo } from '../services/apiAuth'

export default function HomePage() {

    const {currentUserData} = useContext(UserContext)

    return (
        <div>
            <h1>Welcome {currentUserData && currentUserData.firstName}</h1>
            <p>To the greates forum you will ever need</p>
        </div>
    )
}
