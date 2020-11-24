import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/MultiLevelContext';
import { authenticateUser, getCurrentUserInfo } from '../services/apiAuth';
import ErrorMessage from './ErrorMessage';

export default function LoginForm() {
    const history = useHistory()

    const {setCurrentUserData} = useContext(UserContext)
    const [message, setMessage] = useState(null)

    async function loginUser(e) {
        e.preventDefault()
        const payload = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        const res = await authenticateUser(payload)
        if (res && res === 200) {
            const res2 = await getCurrentUserInfo()
            console.log(res2)
            setCurrentUserData(res)
            history.push('/')
        } else {
            setMessage(Object.values(res.data))
        }
    }

    return (
        <div>
            {message && (
                    <ErrorMessage message={message} />
                )
            }
            <form onSubmit={loginUser}>
                <div className="form-group">
                    <label htmlFor='email'>Email: </label>
                    <input className='form-control' type="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password: </label>
                    <input className='form-control' type="password" name="password" required />
                </div>
                <button className="btn btn-primary" type='submit'>Login</button>
            </form>
        </div>
    )
}
