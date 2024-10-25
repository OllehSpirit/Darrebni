import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    return (
        <div className="flex flex-col justify-center items-center gap-10 my-10">
            <TextField value={data.username} label='Username' className='m-5' variant="outlined" color='primary' onChange={(e) => { setData(prev => ({ ...prev, username: e.target.value })) }} />
            <TextField value={data.password} label='Password' className='m-5' variant="outlined" color='primary' onChange={(e) => { setData(prev => ({ ...prev, password: e.target.value })) }} />
            <Link to={'/'}><Button variant="outlined" onClick={()=>localStorage.setItem('token','qwerty')}>LogIn</Button></Link>
        </div>
    )
}
