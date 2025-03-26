import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, customCategoriesState, IToDo, toDoState } from "../atoms";
import { DeleteButton, ListItem, Button } from "../styles/CommonStyles";
import styled from "styled-components";

const CategoryButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const CategoryButton = styled(Button)`
  padding: 4px 8px;
  font-size: 12px;
  background-color: ${(props) => props.theme.accentColor};
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const customCategories = useRecoilValue(customCategoriesState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as Categories };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const deleteToDo = () => {
    setToDos((oldToDos) => {
      return oldToDos.filter((toDo) => toDo.id !== id);
    });
  };
  return (
    <ListItem>
      <span>{text}</span>
      <CategoryButtonContainer>
        {category !== Categories.TO_DO && (
          <CategoryButton name={Categories.TO_DO} onClick={onClick}>
            To Do
          </CategoryButton>
        )}
        {category !== Categories.DOING && (
          <CategoryButton name={Categories.DOING} onClick={onClick}>
            Doing
          </CategoryButton>
        )}
        {category !== Categories.DONE && (
          <CategoryButton name={Categories.DONE} onClick={onClick}>
            Done
          </CategoryButton>
        )}
        {customCategories.map(
          (customCategory) =>
            category !== customCategory && (
              <CategoryButton
                key={customCategory}
                name={customCategory}
                onClick={onClick}
              >
                {customCategory}
              </CategoryButton>
            ),
        )}
        <DeleteButton onClick={deleteToDo}>X</DeleteButton>
      </CategoryButtonContainer>
    </ListItem>
  );
}

export default ToDo;
