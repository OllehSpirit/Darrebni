import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { data } from '../../store/Context'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function UpdateUser() {
    const params = useParams()
    const navigate = useNavigate()

    const context = useContext(data).users.find((_, index) => { return index === parseInt(params.id) })
    const { setUsers, users } = useContext(data)

    const [countries, setCountries] = useState([])
    const [cities, setCities] = useState([])
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        phone: '',
        country: '',
        city: '',
        gender: ''
    })


    useEffect(() => {
        setUser(context)
    }, [context])

    const countryCities = {
        'A': ['a', 'b', 'c'],
        'B': ['d', 'e', 'f'],
        'C': ['g', 'h', 'i'],
        'D': ['j', 'k', 'l']
    }


    useEffect(() => {
        setCountries(['A', 'B', 'C', 'D'])
    }, [])
    useEffect(() => {
        if (user.country) {
            setCities(countryCities[user.country])
        }
        // eslint-disable-next-line
    }, [user.country])

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const addUser = (e) => {
        e.preventDefault()
        if (user.fName && user.lName && user.email && user.password && user.country && user.city) {


            setUsers(users.map((el, index) => {
                if (index === parseInt(params.id)) {
                    return {
                        fName: user.fName,
                        lName: user.lName,
                        email: user.email,
                        password: user.password,
                        phone: user.phone,
                        country: user.country,
                        city: user.city,
                        gender: el.gender
                    }
                }
                else return el
            }))
            
            // setUsers((prev) => [...prev, {
            //     fName: user.fName,
            //     lName: user.lName,
            //     email: user.email,
            //     password: user.password,
            //     phone: user.phone,
            //     country: user.country,
            //     city: user.city,
            //     gender: user.gender
            // }
            // ])

            setError('')
            navigate('/session36') 
        }
        else if (user.fName === '') setError('First Name is required')
        else if (user.lName === '') setError('Last Name is required')
        else if (user.email === '') setError('Email is required')
        else if (user.password === '') setError('Password is required')
        else if (user.phone === '') setError('Phone is required')
        else if (user.country === '') setError('Country is required')
        else if (user.city === '') setError('City is required')
        else if (user.gender === '') setError('Gender is required')

        
    }


    return (
        <div className='d-flex justify-content-center'>
            <Form style={{ backgroundColor: '#ddd', padding: '15px', width: '80vw' }} onSubmit={addUser}>
                <div className='d-flex' style={{ columnGap: '10vw' }}>
                    <Form.Group className="mb-3" controlId="formBasicFName" style={{ width: '45vw' }}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name='fName' placeholder="Enter email" value={user.fName}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '45vw' }}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name='lName' placeholder="Enter email" value={user.lName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" value={user.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" value={user.password}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" name='phone' placeholder="Phone" value={user.phone}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Country</Form.Label>
                    <Form.Control as='select' type="text" name='country' placeholder="Country" value={user.country}
                        onChange={handleChange}>
                        <option value="" key="">Select Country</option>
                        {countries.map((element, index) => {
                            return <option key={index} value={element}>{element}</option>
                        })}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>City</Form.Label>
                    <Form.Control as='select' type="text" name='city' placeholder="City" value={user.city}
                        onChange={handleChange}>
                        <option value="" key="">Select City</option>
                        {cities.map((element, index) => {
                            return <option key={index} value={element}>{element}</option>
                        })}
                    </Form.Control>
                </Form.Group>


                <p style={{ color: 'red' }}>{error}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
