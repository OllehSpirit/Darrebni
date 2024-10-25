import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_TASK } from '../../Reducers/actionTypes';

export default function ViewTasks() {

    // const { users } = useContext(data)
    const dispatch = useDispatch()
    const users = useSelector(state => state.Users)
    const tasks = useSelector(state => state.Tasks)

    const deleteTask = (index) => {
        // setTasks(tasks.filter((_el, i) => {
        //     return i !== index
        // }))
        dispatch({ type: DELETE_TASK, payload: { id: index } })
    }

    return (
        <>
            <h1 className='mt-5' style={{ textAlign: 'center' }}>Tasks</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.length > 0 ?
                        tasks.map((task, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <th>{task.name}</th>
                                    <th>{users[task.userId].fName}</th>
                                    <th>{task.date}</th>
                                    <th>
                                        <Link to={`/update-task/${index}`} style={{ textDecoration: 'none', backgroundColor: '#333', color: 'white', padding: '5px', borderRadius: '5px' }}> update </Link>
                                    </th>
                                    <th>
                                        <span style={{ textDecoration: 'none', backgroundColor: 'red', color: 'white', padding: '5px', borderRadius: '5px', cursor: 'pointer' }} onClick={() => deleteTask(index)}> delete </span>
                                    </th>
                                </tr>
                            )
                        })
                        : <tr><th>NO Tasks Found</th></tr>}
                </tbody>
            </Table>

        </>
    )
}