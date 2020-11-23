import React, {useContext} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { createReply } from '../../services/apiForum';

export default function ReplyForm() {
    const history = useHistory()
    const {postId} = useParams()

    async function addNewReply(e) {
        e.preventDefault()
        const payload = {
            title: e.target.title.value,
            content: e.target.content.value,
            parent: parseInt(postId)
        }
        const res = await createReply(payload)
        if (res === 201) {
            history.push(`/posts/${postId}`)
        }
    }

    return (
        <div>
            <form onSubmit={addNewReply}>
                <div className="form-group">
                    <label htmlFor='title'>Title: </label>
                    <input className='form-control' type="text" name="title" required/>
                </div>
                <div className="form-group">
                    <label htmlFor='content'>Content: </label>
                    <textarea className="form-control" name='content' rows="4" required></textarea>
                </div>
                <button className="btn btn-primary" type='submit'>Add Reply</button>
            </form>
        </div>
    )
}
