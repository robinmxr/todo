import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import { addTodo } from '../services/TodoService';


const AddTodoModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Add Todo");
        })
    }

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Fill In Todo Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="details">
                                    <Form.Label>Todo Details</Form.Label>
                                    <Form.Control type="text" name="details" required placeholder="" />
                            </Form.Group>
                            <Form.Select controlId="status">
                                <Form.Label>Todo Status</Form.Label>
                                <option value="Pending">Pending</option>
                                <option value="Complete">Complete</option>
                            </Form.Select>
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddTodoModal;