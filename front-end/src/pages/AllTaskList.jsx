import AddTaskModal from "../components/AddTaskModal";
import { Button } from "react-bootstrap";
import Task from "../components/Task";
import taskData from "../data/tasks.json";
import { useEffect, useState } from "react";

const AllTasksList = () => {
  const [tasks, setTasks] = useState(taskData);
  const [show, setShow] = useState(false);



  return (
    <>
      <AddTaskModal show={show} setShow={setShow} />
      <Button variant="primary" onClick={() => setShow(true)}>
        Add Task
      </Button>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default AllTasksList;
