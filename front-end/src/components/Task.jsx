import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import { useState } from "react";

const Task = ({ task }) => {
  const [completed, setCompleted] = useState(task.completed);
  
  return (
    <Row>
      <Col>{task.title}</Col>
      <Col>
        <Form.Check
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </Col>
    </Row>
  );
};

export default Task;
