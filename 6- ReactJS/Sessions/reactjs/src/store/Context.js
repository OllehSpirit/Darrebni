import { createContext, useState } from "react"

export const data = createContext()

export default function Context(props) {
    
    const [users, setUsers] = useState([{
        fName: 'aa',
        lName: 'vv',
        email: 'a',
        password: 'a',
        phone: '',
        country: '',
        city: '',
        gender: ''
    }])
    const [tasks, setTasks] = useState([])

    return (
        <data.Provider value={{users,setUsers,tasks,setTasks}}>
            {props.children}
        </data.Provider>
    )
}
