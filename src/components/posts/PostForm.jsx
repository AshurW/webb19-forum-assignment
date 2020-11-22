import React, { useState, useEffect } from 'react'
import { createPost, getCategories } from '../../services/apiForum'
import { useHistory } from 'react-router-dom';

export default function PostForm() {
    const history = useHistory()
    const [categoryData, setCategoryData] = useState(null)

    async function createNewPost(e) {
        e.preventDefault()
        const payload = {
            title: e.target.title.value,
            content: e.target.content.value,
            category: e.target.categoryList.value
        }
        const res = await createPost(payload)
        if (res === 201) {
            history.push('/posts')
        }
    }

    useEffect(() => {
        async function fetchCategories() {
            const data = await getCategories()
            setCategoryData(data)
        }
        fetchCategories()
    }, [])

    return (
        <div>
            <form onSubmit={createNewPost}>
                <div className="form-group">
                    <label htmlFor='title'>Title: </label>
                    <input className='form-control' type="text" name="title" required/>
                </div>
                <div className="form-group">
                    <label htmlFor='content'>Content: </label>
                    <textarea className="form-control" name='content' rows="4" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor='categoryList'>Category: </label>
                    <select className='form-control' name='categoryList'>
                        {categoryData && categoryData.map(category => {
                            return (
                                <option key={category.id} value={category.id}>{category.title}</option>
                            )
                        })}
                    </select>
                </div>
                <button className="btn btn-primary" type='submit'>Register</button>
            </form>
        </div>
    )
}
