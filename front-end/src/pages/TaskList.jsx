import { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import taskData from "../data/tasks.json";
import Task from "../components/Task";

const TasksList = () => {
  const [selection, setSelection] = useState("completed");
  const [tasks, setTasks] = useState([]);

  const getCompletedTasks = () => {
    setTasks(taskData.filter((task) => task.completed === true));
  };

  const getPendingTasks = () => {
    setTasks(taskData.filter((task) => task.completed !== true));
  };

  useEffect(() => {
    if (selection === "completed") {
      getCompletedTasks();
    } else {
      getPendingTasks();
    }
  }, [selection]);

  return (
    <>
      <Row>
        <Form.Select
          size="lg"
          onChange={(e) => setSelection(e.target.value)}
          value={selection}
        >
          <option value={"completed"}>Completed</option>
          <option value={"pending"}>Pending</option>
        </Form.Select>
      </Row>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default TasksList;
