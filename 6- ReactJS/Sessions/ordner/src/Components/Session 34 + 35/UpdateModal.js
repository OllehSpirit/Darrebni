import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function UpdateModal({ title, label, placeholder, show, handleClose, currTask, refName, editTask }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>{label}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={placeholder}
                            defaultValue={currTask}
                            ref={refName}
                            autoFocus
                        />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={editTask}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
