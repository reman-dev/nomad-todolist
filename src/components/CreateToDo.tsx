import { useForm } from "react-hook-form";
import { categoryState, toDoState } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Form, Input, Button } from "../styles/CommonStyles";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    console.log("add:", toDo);
    setValue("toDo", "");
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
  };

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <Input
        {...register("toDo", { required: "할 일을 입력하세요" })}
        type="text"
        placeholder="할 일을 입력하세요"
      />
      <Button>추가</Button>
    </Form>
  );
}

export default CreateToDo;
