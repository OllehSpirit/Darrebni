import { createContext, useState } from "react"

export const data = createContext()

export default function Context(props) {
    
    const [users, setUsers] = useState([])
    const [tasks, setTasks] = useState([])

    return (
        <data.Provider value={{users,setUsers,tasks,setTasks}}>
            {props.children}
        </data.Provider>
    )
}
