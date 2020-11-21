import React, {useState, useEffect} from 'react'
import { getCurrentUserInfo } from '../services/apiAuth'

export default function HomePage() {

    const [currentUserData, setCurrentUserData] = useState(null)

    useEffect(() => {
        async function fetchCurrentUser () {
            const res = await getCurrentUserInfo()
            setCurrentUserData(res)
        }
        fetchCurrentUser()
    }, [])

    return (
        <div>
            <h1>Welcome {currentUserData && currentUserData.firstName}</h1>
        </div>
    )
}
