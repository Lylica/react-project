import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../assets/components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-pink-700 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-white"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>
        <div className="bg-pink-100 p-4 rounded-md w-11/12">
          <h2 className="text-xl text-pink-700 font-bold">{title}</h2>
          <p className="text-pink-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
