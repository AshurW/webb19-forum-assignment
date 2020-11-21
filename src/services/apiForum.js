import axios from 'axios';

const ROOT_URL = 'https://lab.willandskill.eu/api/v1/forum'
const HEADER_AUTH = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('loginToken')}`
    }
}

export async function getPosts () {
    try {
        const res = await axios.get(`${ROOT_URL}/posts/`, HEADER_AUTH)
        // console.log(res.data)
        return res.data.results
    } catch (error) {
        
    }
}