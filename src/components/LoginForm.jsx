import React from 'react'
import { useHistory } from 'react-router-dom';
import { authenticateUser } from '../services/apiAuth';

export default function LoginForm() {
    const history = useHistory()


    async function loginUser(e) {
        e.preventDefault()
        const payload = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        const res = await authenticateUser(payload)
        if(res && res === 200) {
            history.push('/')
        } else {
            console.log('something worng')
        }
    }

    return (
        <div>
            <form onSubmit={loginUser}>
                <div className="form-group">
                    <label htmlFor='email'>Email: </label>
                    <input className='form-control' type="email" name="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password: </label>
                    <input className='form-control' type="password" name="password" required/>
                </div>
                <button className="btn btn-primary" type='submit'>Login</button>
            </form>
        </div>
    )
}
