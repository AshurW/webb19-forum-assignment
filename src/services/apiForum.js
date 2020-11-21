import axios from 'axios';

const ROOT_URL = 'https://lab.willandskill.eu/api/v1/forum'
const HEADER_AUTH = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('loginToken')}`
    }
}

export async function getCategories() {
    try {
        const res = await axios.get(`${ROOT_URL}/categories`, HEADER_AUTH)
        return res.data.results
    } catch (error) {
        
    }
}

export async function getPosts() {
    try {
        const res = await axios.get(`${ROOT_URL}/posts/`, HEADER_AUTH)
        return res.data.results
    } catch (error) {

    }
}

export async function createPost(data) {
    try {
        const res = await axios.post(`${ROOT_URL}/posts/`, data, HEADER_AUTH)
        return res.status
    } catch (error) {
        
    }
}

export async function getPost(id) {
    try {
        const res = await axios.get(`${ROOT_URL}/posts/${id}`, HEADER_AUTH)
        return res.data
    } catch (error) {
        
    }
}

export async function getReplies(id) {
    try {
        const res = await axios.get(`${ROOT_URL}/posts/${id}/replies`, HEADER_AUTH)
        return res.data.results
    } catch (error) {
        
    }
}

