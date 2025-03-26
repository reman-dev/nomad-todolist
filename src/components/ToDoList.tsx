import { useRecoilState, useRecoilValue } from "recoil";
import {
  Categories,
  categoryState,
  customCategoriesState,
  toDoSelector,
} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";
import { Select, List } from "../styles/CommonStyles";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${(props) => props.theme.textColor};
  text-align: center;
  text-transform: uppercase;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const customCategories = useRecoilValue(customCategoriesState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };

  return (
    <Container>
      <Title>To Do List</Title>
      <div>
        <Select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
          {customCategories.map((customCat) => (
            <option key={customCat} value={customCat}>
              {customCat}
            </option>
          ))}
        </Select>
        <CreateCategory />
      </div>
      <CreateToDo />
      <List>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </List>
    </Container>
  );
}

export default ToDoList;
