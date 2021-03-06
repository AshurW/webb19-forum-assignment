import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { getCountries, registerUser } from '../services/apiAuth';
import ErrorMessage from './ErrorMessage';

export default function RegisterForm() {
    const history = useHistory()

    const [countryData, setCountryData] = useState(null)
    const [message, setMessage] = useState(null)

    async function registerNewUser (e) {
        e.preventDefault()
        const payload = {
            email: e.target.email.value,
            password: e.target.password.value,
            firstName: e.target.firstname.value,
            lastName: e.target.lastname.value,
            country: e.target.countryList.value
        }

        const res = await registerUser(payload)
        if (res && res.status === 201) {
            history.push('/login')
        } else {
            setMessage(Object.values(res.data))
        } 
    }

    useEffect(() => {
        async function fetchCountries() {
            const res = await getCountries()
            setCountryData(res)
        }
        fetchCountries()
    }, [])

    return (
        <div>
            {message && (
                    <ErrorMessage message={message} />
                )
            }
            <form onSubmit={registerNewUser}>
                <div className="form-group">
                    <label htmlFor='email'>Email: </label>
                    <input className='form-control' type="email" name="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password: </label>
                    <input className='form-control' type="password" name="password" required/>
                </div>
                <div className="form-group">
                    <label htmlFor='firstname'>Firstname: </label>
                    <input className='form-control' type="text" name="firstname" required/>
                </div>
                <div className="form-group">
                    <label htmlFor='lastname'>Lastname: </label>
                    <input className='form-control' type="text" name="lastname" required/>
                </div>
                <div className="form-group">
                    <label htmlFor='countryList'>Country: </label>
                    <select className='form-control' name='countryList'>
                        {countryData && countryData.map(country => {
                            return (
                                <option key={country.id} value={country.id}>{country.title}</option>
                            )
                        })}
                    </select>
                </div>
                <button className="btn btn-primary" type='submit'>Register</button>
            </form>
        </div>
    )
}
