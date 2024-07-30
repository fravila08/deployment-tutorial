import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddTaskModal({ show, setShow }) {
  return (
    <>
      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Task Name</Form.Label>
              <Form.Control type="text" placeholder="Code all Day" />
              <Form.Check type="checkbox" label="completed" />
              <Button variant="secondary" onClick={()=>setShow(false)}>
                Close
              </Button>
              <Form.Control type="submit" value="Create" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddTaskModal;
