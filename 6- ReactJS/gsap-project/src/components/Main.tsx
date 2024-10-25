import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Main() {

    useGSAP(() => {
        gsap.to('#main', { opacity: 1, delay: .1, duration: 2 })
    }, [])

    return (
        <div id='main' className='flex justify-center items-center opacity-0 text-3xl font-bold' style={{ minHeight: '70vh' }}>Hello Main</div>
    )
}
