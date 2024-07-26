import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateModal from './UpdateModal';
import Modal from 'react-bootstrap/Modal';


export default function ToDoList() {
    const input = useRef()
    const name = useRef()
    const [tasks, setTasks] = useState([])
    const [currTask, setCurrTask] = useState()
    const [i, setI] = useState()
    const [iDelete, setIDelete] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //confirm the delete
    const [showDel, setShowDel] = useState(false);
    const handleCloseDel = () => setShowDel(false);
    const handleShowDel = (i) => {
        setIDelete(i)
        setShowDel(true);
    }


    const submit = (e) => {
        e.preventDefault()
        setTasks([...tasks, input.current.value])
        input.current.value = ''
    }

    const deleteTask = () => {
        setTasks(tasks.filter((element, index) => { return index !== iDelete }))
        handleCloseDel()
    }

    const initModal = (index) => {
        setCurrTask(tasks[index])
        setI(index)
        handleShow()
    }

    const editTask = () => {
        setTasks(
            tasks.map((element, index) => {
                if (index === i) {
                    return name.current.value
                }
                else {
                    return element
                }
            })
        )
        handleClose()
    }
    return (
        <>

            <div className="mx-5 mb-5 d-flex flex-column justify-content-center align-items-center">

                <h1>To-Do List</h1>
                <form className='d-flex flex-column align-items-center' onSubmit={submit}>
                    <InputGroup className="mb-3" style={{ width: '80vw' }}>
                        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" style={{ border: '1px solid #666' }} ref={input} />
                    </InputGroup>
                    <Button type='submit' variant="primary" className='mb-5' style={{ width: '10vw' }}>Submit</Button>
                </form>

                {
                    tasks.map((element, index) => {
                        return (
                            <div key={index} className='d-flex my-2'>
                                <Card>
                                    <Card.Body >Task number <span style={{ color: 'red' }}>{index + 1}</span> and Task name is <span style={{ color: 'red' }}>{element} </span>
                                        <Button className='mx-2' variant="secondary" onClick={() => initModal(index)}>Edit</Button>
                                        <Button className='mx-2' variant="danger" onClick={() => handleShowDel(index)}>Delete</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>

            <UpdateModal title={'Edit Task'} label={'Task Name'} placeholder={'name'} show={show} handleClose={handleClose} currTask={currTask} refName={name} editTask={editTask} />


            <Modal show={showDel} onHide={handleCloseDel}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete the task?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDel}>
                        No
                    </Button>
                    <Button variant="primary" onClick={deleteTask}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}