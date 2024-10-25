import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addPost } from '../../Reducers/action';
import { getUsers } from '../../api/users';
import { postPost } from '../../api/posts';

export default function AddPost() {

    const title = useRef(null)
    const description = useRef(null)
    const userId = useRef(null)

    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            setUsers(await getUsers())
        })()
    }, [])

    const addPostForm = async (e) => {
        e.preventDefault()
        if (title !== '' && description !== '' && userId !== '') {
            dispatch(addPost({
                title: title.current.value,
                description: description.current.value,
                userId: userId.current.value
            }))
            
            postPost(title.current.value,description.current.value,userId.current.value)
              

            setError('')
        }
        else if (title === '')
            setError('Invalid Title')
        else if (description === '')
            setError('Invalid Description')
        else if (userId === '')
            setError('Invalid User')

        title.current.value = ''
        description.current.value = ''
        userId.current.value = ''
    }

    return (
        <div className='p-5'>
            <h1 className='text-center'>Add Post</h1>

            <Form style={{ backgroundColor: '#ddd', padding: '15px', width: '90vw' }} onSubmit={addPostForm}>

                <Form.Group className="mb-3" controlId="formBasicFName">
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control type="text" name='fName' required ref={title} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFName">
                    <Form.Label>Post Description</Form.Label>
                    <div data-mdb-input-init className="form-outline">
                        <textarea className="form-control" style={{ resize: 'none' }} id="textAreaExample1" rows="4" ref={description}></textarea>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>User</Form.Label>
                    <Form.Control as='select' type="text" name='userId' placeholder="Country" ref={userId}>
                        <option value="" key="">Select User</option>
                        {users.map(element => {
                            return <option key={element.id} value={element.id}>{element.name}</option>
                        })}
                    </Form.Control>
                </Form.Group>

                <div style={{ color: 'red' }}>{error}</div>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}