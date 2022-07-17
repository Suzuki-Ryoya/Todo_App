import axios from "axios";
import { Todo } from "../todos/todo";

const todoDataUrl = "http://localhost:3100/todos";

//todoデータの全取得
export const getAllTodosData = async () => {
  const response = await axios.get(todoDataUrl);
  return response.data;
};

//todoデータを追加する
export const AddTodoData = async (todo: Todo) => {
  const response = await axios.post(todoDataUrl, todo);
  return response.data;
};

export const deleteTodoData = async (id: string) => {
  await axios.delete(`${todoDataUrl}/${id}`);
  return id;
};
