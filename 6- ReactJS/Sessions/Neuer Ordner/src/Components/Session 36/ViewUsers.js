import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import Table from 'react-bootstrap/Table';
import { DELETE_USER } from '../../Reducers/actionTypes';

export default function ViewUsers() {

    // const { users, setUsers } = useContext(data)
    const dispatch = useDispatch()
    const users = useSelector(state => state.Users)


    const deleteUser = (index) => {
        // setUsers(users.filter((_el, i) => {
        //     return i !== index
        // }))
        dispatch({ type: DELETE_USER, payload: { id: index } })
    }

    return (
        <>
            <h1 className='mt-5' style={{ textAlign: 'center' }}>USERS</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ?
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <th>{user.fName}</th>
                                    <th>{user.lName}</th>
                                    <th>{user.email}</th>
                                    <th>{user.phone}</th>
                                    <th>{user.country}</th>
                                    <th>{user.city}</th>
                                    <th>{user.gender}</th>
                                    <th>
                                        <Link to={`/update/${index}`} style={{ textDecoration: 'none', backgroundColor: '#333', color: 'white', padding: '5px', borderRadius: '5px' }}> update </Link>
                                    </th>
                                    <th>
                                        <span style={{ textDecoration: 'none', backgroundColor: 'red', color: 'white', padding: '5px', borderRadius: '5px', cursor: 'pointer' }} onClick={() => deleteUser(index)}> delete </span>
                                    </th>
                                </tr>
                            )
                        })
                        : <tr><th>NO Users Found</th></tr>}
                </tbody>
            </Table>

        </>
    )
}