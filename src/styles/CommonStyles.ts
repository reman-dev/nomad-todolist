import styled from "styled-components";

// 버튼 스타일
export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${(props) => props.theme.accentColor};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 20px;
  border-radius: 5px;
  color: red;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: rgba(255, 0, 0, 0.1);
  }
`;

// 폼 관련 스타일
export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 14px;
  margin-right: 8px;
  flex: 1;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.accentColor};
  }
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 14px;
  margin-right: 8px;
  margin-bottom: 5px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.accentColor};
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

// 리스트 관련 스타일
export const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f8f8f8;
  }
`;
