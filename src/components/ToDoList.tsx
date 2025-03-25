import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { Categories, toDoState } from "../atoms";
interface IForm {
  toDo: string;
}

function ToDoList() {
  const [toDo, setToDo] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    console.log("add:", toDo);
    setValue("toDo", "");
    setToDo((prev) => [
      { id: Date.now(), text: toDo, category: Categories.TO_DO },
      ...prev,
    ]);
  };
  console.log(toDo);

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "할 일을 입력하세요" })}
          type="text"
          placeholder="할 일을 입력하세요"
        />
        <button>추가</button>
      </form>
      <ul>
        {toDo.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
