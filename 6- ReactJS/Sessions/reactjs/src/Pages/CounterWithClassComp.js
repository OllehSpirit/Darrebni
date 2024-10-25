import Counter from '../Components/Unneccary Component/Counter'
import CounterClassComponent from '../Components/Class Component/CounterClassComponent'
import FullComponent from '../Components/Unneccary Component/FullComponent'

export default function CounterWithClassComp() {
    return (
        <div className='mx-5 mb-5'>
            <h1>Session 33</h1>
            <Counter />
            <CounterClassComponent />
            <FullComponent />
        </div>
    )
}
