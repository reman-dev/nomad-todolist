import { atom } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
