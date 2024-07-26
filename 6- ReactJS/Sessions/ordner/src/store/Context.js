import { createContext, useState } from "react"

export const data = createContext()

export default function Context(props) {
    
    const [users, setUsers] = useState([])

    return (
        <data.Provider value={{users,setUsers}}>
            {props.children}
        </data.Provider>
    )
}
