import { createBrowserRouter } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm";
import TasksList from "./pages/TaskList";
import AllTasksList from "./pages/AllTaskList";
import App from "./App"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AllTasksList />,
      },
      {
        path: "tasks",
        element: <TasksList />,
      },
      {
        path: "register",
        element: <RegistrationForm />,
      },
    ],
  },
]);

export default router;
