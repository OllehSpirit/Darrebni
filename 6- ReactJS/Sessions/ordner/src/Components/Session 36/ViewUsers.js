import { useContext } from 'react'
import { data } from '../../store/Context'

import Table from 'react-bootstrap/Table';

export default function ViewUsers() {

    const { users } = useContext(data)
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
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
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
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}