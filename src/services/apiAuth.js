import axios from 'axios';

const ROOT_URL = 'https://lab.willandskill.eu/api/v1'
const HEADER_AUTH = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('loginToken')}`
    }
}

export async function getCountries() {
    try {
        const res = await axios.get(`${ROOT_URL}/countries/`)
        const data = res.data.results
        return data
    } catch (error) {
        return error.response
    }
}

export async function registerUser(payload) {
    try {
        const res = await axios.post(`${ROOT_URL}/auth/users/`, payload)
        return res
    } catch (error) {
        return error.response
    }
}

export async function authenticateUser(payload) {
    try {
        const res = await axios.post(`${ROOT_URL}/auth/api-token-auth/`, payload)
        if (res.data.token) {
            localStorage.setItem('loginToken', res.data.token)
        }
        return res.status
    } catch (error) {
        console.log(error.response)
        return error.response
    }
}

export async function getCurrentUserInfo() {
    try {
        const res = await axios.get(`${ROOT_URL}/me/`, HEADER_AUTH)
        return res.data
    } catch (error) {
        return error.response
    }
}