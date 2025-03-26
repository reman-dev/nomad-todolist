import { useForm } from "react-hook-form";
import { customCategoriesState } from "../atoms";
import { useRecoilState } from "recoil";
import { Form, Input, Button } from "../styles/CommonStyles";

interface IForm {
  category: string;
}

const CreateCategory = () => {
  const [customCategories, setCustomCategories] = useRecoilState(
    customCategoriesState,
  );
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ category }: IForm) => {
    const newCategory = category.trim();
    if (!customCategories.includes(newCategory)) {
      setCustomCategories((oldCategories) => [...oldCategories, newCategory]);
    } else {
      alert("이미 존재하는 카테고리입니다.");
    }
    setValue("category", "");
  };

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <Input
        {...register("category", { required: "추가할 카테고리를 입력하세요" })}
        placeholder="새 카테고리 추가"
      />
      <Button>추가</Button>
    </Form>
  );
};

export default CreateCategory;
