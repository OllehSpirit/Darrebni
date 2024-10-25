import { useDispatch, useSelector } from "react-redux"
import { DECREMENT, INCREMENT, MULTIPLY } from "../Reducers/actionTypes"

export default function CounterRedux() {
    const counter = useSelector(state => state.Counter)
    const dispatch = useDispatch()

    return (
        <>
            <h3 className="text-center">Counter is : {counter}</h3>
            <div className="d-flex justify-content-center gap-2">
                <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
                <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
                <button onClick={() => dispatch({ type: MULTIPLY })}>X</button>
            </div>
        </>
    )
}
