import { useCallback, useState } from 'react'
import Button from './Button'

export default function UseCallbackComponent() {
    const [count, setCount] = useState(0)

    const increment = () => { setCount(prev => prev + 1) }

    const updatedIncrement = useCallback(increment,[]) 

    return (
        <>
            <h3>{count}</h3>
            <Button onClick={updatedIncrement}>+</Button>
        </>
    )
}