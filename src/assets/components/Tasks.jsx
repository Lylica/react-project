import { ChevronRightIcon, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-2 p-6 bg-pink-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-1">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-pink-600 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <XIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
