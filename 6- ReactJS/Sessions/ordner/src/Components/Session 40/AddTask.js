import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { data } from '../../store/Context'
import { useDispatch } from 'react-redux';

export default function AddTask() {

    const { users } = useContext(data)
    const dispatch = useDispatch()

    const [error, setError] = useState('')
    const [task, setTask] = useState({
        name: '',
        userId: '',
        date: ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
    }

    const addTask = (e) => {
        e.preventDefault()
        if (task.name && task.userId && task.date) {

            setError('')


            // setTasks((prev)=>[...prev,task])
            dispatch({type:'ADD_TASK',payload:task})

            setTask({
                name: '',
                userId: '',
                date: ''
            })
        }
        else if (task.name === '') setError('Name is required')
        else if (task.userId === '') setError('User is required')
        else if (task.date === '') setError('Date is required')

    }

    return (
        <div className='d-flex justify-content-center'>
            <Form style={{ backgroundColor: '#ddd', padding: '15px', width: '80vw' }} onSubmit={addTask}>
                <Form.Group className="mb-3" controlId="formBasicFName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" value={task.name}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>User</Form.Label>
                    <Form.Control as='select' type="text" name='userId' placeholder="Country" value={task.userId}
                        onChange={handleChange}>
                        <option value="" key="">Select User</option>
                        {users.map((element, index) => {
                            return <option key={index} value={index}>{element.fName}</option>
                        })}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFName">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name='date' placeholder="Enter Name" value={task.date}
                        onChange={handleChange}
                    />
                </Form.Group>

                <p style={{ color: 'red' }}>{error}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
